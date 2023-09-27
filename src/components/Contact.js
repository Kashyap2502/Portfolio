import "../styles/Contact.css";
import Divider from "./Divider";
const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <h1>Contact me</h1>

        <Divider />
        <br></br>
        <p>
          Please feel free to contact me if you have any questions. I would love
          to work together as a team.
        </p>
        <button>Send an email</button>
      </div>
    </>
  );
};

export default Contact;
