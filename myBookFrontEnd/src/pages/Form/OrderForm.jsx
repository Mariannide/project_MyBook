import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function OrderForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [pickup, setPickup] = useState("");

  
    function handleSubmit(event) {
      event.preventDefault();

    const buyer = {
      name: name,
      surname: surname,
      creditCard: creditCard,
    };

    const pickUpPoint = {
      point_name: pickup,
      city_name: pickup,
      
    };

    const booking = {
      orderDate: new Date(),
      payment: true,
      buyer: buyer,
      pickUpPoint: pickUpPoint,
    };

    fetch("http://localhost:8080/api/booking/create", {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName("");
        setSurname("");
        setCreditCard("");
        setPickup("");
        window.location.href = "/"; //serve per reindirizzare la pagina in home
      })
      .catch((error) => {
        console.error("Error during request: ", error);
      });
  };

  return (
    <div className="container">
      <h1>Order confirmed!</h1>
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
            <option value="Sol">Sol</option>
            <option value="Nuvola">Nuvola</option>
            <option value="Luna">Luna</option>
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
