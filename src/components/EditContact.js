import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";

const EditContact = ({ history, setContacts }) => {
  const { id } = useParams();
  const contactToEdit = history.location.state.data;

  return (
    <div>
      <ContactForm
        contact={contactToEdit}
        setContacts={setContacts}
        history={history}
        id={id}
      />
    </div>
  );
};

export default EditContact;
