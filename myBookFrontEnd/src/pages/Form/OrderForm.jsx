import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function OrderForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [pickups, setPickups] = useState([]);
  const [pickup, setPickup] = useState("");
  const [email, setEmail] = useState("");

  fetch("http://localhost:8080/api/pickUpPoint/all", { //questo è l'EndPoint che si riferisce ai 3 punti di ritiro nel database
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
    .then((data) => console.log(data));
  
  }

  return (
    <div className="container">
      <h1>Want you order your book?</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
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
          Pay Now
        </button>
      </Form>
    </div>
  );
}

export default OrderForm;
