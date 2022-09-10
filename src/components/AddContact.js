import React from "react";
import ContactForm from "./ContactForm";

const AddContact = ({ contacts, setContacts }) => {
  return (
    <React.Fragment>
      <ContactForm setContacts={setContacts} />
    </React.Fragment>
  );
};

export default AddContact;
