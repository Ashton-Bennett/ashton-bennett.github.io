import { useRef } from "react";
import emailjs from "@emailjs/browser";

const formBox = {
  backgroundColor: "#000000",
  borderRadius: "15px",
  boxShadow: "10px 10px 10px rgba(0, 0, 0, 1.0)",
  height: "70%",
  width: "60%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const formEnterField = {
  width: "30vw",
  marginRight: "1em",
  marginLeft: "2.5em",
  fontSize: "1.5rem",
  color: "white",
  border: "solid 1px",
  borderColor: "#2EB718",
  borderRadius: "5px",
  backgroundColor: "#201D1D",
  outline: "none",
};
const formEnterFieldDetail = {
  width: "30vw",
  height: "20vh",
  marginRight: "1em",
  marginLeft: "2.5em",
  fontSize: "1.5rem",
  color: "white",
  border: "solid 1px",
  borderColor: "#2EB718",
  borderRadius: "5px",
  backgroundColor: "#201D1D",
  outline: "none",
  resize: "none",
};

const formButtonSubmit = {
  backgroundColor: "#E3941C",
  color: "white",
  width: "30vw",
  marginLeft: "9rem",
  marginTop: "2rem",
  padding: ".5em .5em",
  borderRadius: "15px",
  border: "none",
  fontSize: "1.4rem",
  boxShadow: "10px 10px 10px rgba(0, 0, 0, 1.0)",
  cursor: "pointer",
  fontFamily: "Jacques Francois",
};

const labelStyle = {
  fontSize: "1.5em",
};

const labelStyleDetail = {
  fontSize: "1.5em",
  float: "left",
  width: "2.6em",
};

const formLine = {
  padding: "1em",
};

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7q5fuxo",
        "template_uolh2xi",
        form.current,
        "lfjcebaw33hUQpejJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div style={formBox}>
      <form ref={form} onSubmit={sendEmail}>
        <div style={formLine}>
          <label style={labelStyle}>Name:</label>
          <input
            style={formEnterField}
            type="text"
            name="user_name"
            required
          ></input>
          <br></br>
        </div>

        <div style={formLine}>
          <label style={labelStyle}>Email:</label>
          <input
            style={formEnterField}
            type="email"
            name="user_email"
            required
          ></input>
          <br></br>
        </div>

        <div style={formLine}>
          <label style={labelStyleDetail}>Detail:</label>
          <textarea
            style={formEnterFieldDetail}
            type="textarea"
            name="user_message"
            required
          ></textarea>
          <br></br>
        </div>

        <input style={formButtonSubmit} type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default ContactForm;
