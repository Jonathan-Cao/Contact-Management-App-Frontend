import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Contact = ({ _id, name, email, gender, phone, handleRemoveContact }) => {
  const history = useHistory();

  const contact = { name: name, email: email, phone: phone, gender: gender };
  return (
    <Card style={{ width: "18rem" }} className="contact">
      <Card.Body>
        <Card.Title className="contact-name">{name}</Card.Title>
        <div className="contact-details">
          <div>Email: {email}</div>
          <div>Phone: {phone} </div>
          <div>Gender: {gender} </div>
        </div>
        <Button
          variant="primary"
          onClick={() =>
            history.push({
              pathname: `/edit/${_id}`,
              state: { data: contact },
            })
          }
        >
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveContact(_id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Contact;
