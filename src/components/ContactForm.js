import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = (props) => {
  const [contact, setContact] = useState({
    name: props.contact ? props.contact["name"] : "",
    email: props.contact ? props.contact["email"] : "",
    phone: props.contact ? props.contact["phone"] : "",
    gender: props.contact ? props.contact["gender"] : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { name, email, gender, phone } = contact;

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const contact = {
        name,
        email,
        gender,
        phone,
      };
      setErrorMsg("");
      props.handleOnSubmit(contact);
    }
  };

  const validateForm = () => {
    if (name === "") {
      setErrorMsg("Name required");
      return false;
    }
    if (email === "") {
      setErrorMsg("Email required");
      return false;
    }
    return true;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-form">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Enter name of contact"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Contact Email</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Contact Phone</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="phone"
            value={phone}
            placeholder="Enter phone"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="gender"
            value={gender}
            placeholder="Enter gender of contact"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    </div>
  );
};

export default ContactForm;
