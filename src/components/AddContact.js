import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { addContact, getAllContacts } from "../services/ContactService";

const AddContact = ({ contacts, setContacts }) => {
  const [successMsg, setSuccessMsg] = useState("");

  const handleOnSubmit = (contact) => {
    addContact(contact).then((response) => {
      if (response.status === 201) {
        setSuccessMsg("Contact added successfully");
        getAllContacts()
          .then((response) => response.json())
          .then((data) => setContacts(data["data"]));
      }
    });
  };

  return (
    <React.Fragment>
      <ContactForm handleOnSubmit={handleOnSubmit} />
      {successMsg && <p className="successMsg">{successMsg}</p>}
    </React.Fragment>
  );
};

export default AddContact;
