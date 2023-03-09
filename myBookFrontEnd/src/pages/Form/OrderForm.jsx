import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../images/pennelli.jpg";

function OrderForm() {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [pickups, setPickups] = useState([]);
  const [pickup, setPickup] = useState("");
  const [email, setEmail] = useState("");

  fetch("http://localhost:8080/api/pickUpPoint/all", { //questo è l'EndPoint che si riferisce ai punti di ritiro nel database
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setPickups(data)); //I punti di ritiro che vengono dal database

  function handleSubmit(event) {
    event.preventDefault();

    const order = {
      payment: true,
      buyer: {
        name: name,
        surname: surname,
        email: email,
        creditCard: creditCard
      },
      pickUpPoint: {
        id: pickup
      }
    }

    fetch("http://localhost:8080/api/booking/create",{
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {console.log(data)
      navigate("/")});
  
  }

  return (
    <>
   
    <div>
      <div style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "800px",
        }}>
      <br/>
      <div className="container">

     
      <h1 style={{fontFamily:"baskerville", fontWeight:"bold", color:"ButtonText"}}>"Do you wanna pick up your book?</h1>
      <br/>
      <br/>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            style={{ width: '30%' }}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="surname">Surname:</Label>
          <Input
            style={{ width: '30%' }}
            type="text"
            name="surname"
            id="surname"
            placeholder="Surname"
            required
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">Email:</Label>
          <Input
            style={{ width: '30%' }}
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="creditCard">Credit Card:</Label>
          <Input
            style={{ width: '30%' }}
            type="text"
            name="creditCard"
            id="creditCard"
            placeholder="Credit Card"
            required
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pickup">Pick Up Point:</Label>
          <select
            name="pickup"
            id="pickup"
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          >
            <option value="">Select your pick up point</option>
            {pickups.map(p => <option key={p.id} value={p.id}>{p.point_name} ({p.city_name})</option> )}
          </select>
        </FormGroup>
        <button
          className="bg-dark text-white btn"
          color="dark text-white"
          type="submit"
        >
          Take it!
        </button>
      </Form>
    </div>
    </div>
    </div>
    </>
  );
}

export default OrderForm;
