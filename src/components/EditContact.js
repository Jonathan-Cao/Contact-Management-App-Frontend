import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { getAllContacts, updateContact } from "../services/ContactService";

const EditContact = ({ history, setContacts }) => {
  const { id } = useParams();
  const contactToEdit = history.location.state.data;

  const handleOnSubmit = (contact) => {
    updateContact(id, contact).then((response) => {
      if (response.status === 200) {
        getAllContacts()
          .then((response) => response.json())
          .then((data) => setContacts(data["data"]));
        history.push("/");
      }
    });
  };

  return (
    <div>
      <ContactForm contact={contactToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditContact;
