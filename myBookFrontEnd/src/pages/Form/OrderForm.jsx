import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function OrderForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [pickup, setPickup] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/send-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        creditCard: creditCard,
        pickUpPoint: pickup
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
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
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
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
