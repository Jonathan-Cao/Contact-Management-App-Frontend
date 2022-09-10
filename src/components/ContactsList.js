import React from "react";
import _ from "lodash";
import Contact from "./Contact";
import { deleteContact, getAllContacts } from "../services/ContactService";

const ContactsList = ({ contacts, setContacts }) => {
  // console.log(contacts);
  const handleRemoveContact = (id) => {
    deleteContact(id).then((response) => {
      if (response.status === 200) {
        getAllContacts()
          .then((response) => response.json())
          .then((data) => setContacts(data["data"]));
      }
    });
  };

  return (
    <React.Fragment>
      <div className="contact-list">
        {!_.isEmpty(contacts) ? (
          contacts.map((contact) => (
            <Contact
              key={contact["_id"]}
              {...contact}
              handleRemoveContact={handleRemoveContact}
            />
          ))
        ) : (
          <p className="message">
            No contacts available. Please add some contacts.
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ContactsList;
