import { useState } from "react";

const formBox = {
  backgroundColor: "rgb(32, 29, 29)",
  borderRadius: "15px",
  boxShadow: "rgba(0, 0, 0, 0.6) 0px 8px 15px;",
  height: "70%",
  width: "60%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const formEnterField = {
  width: "30vw",
  display: "flex",
  flexDirection: "column",
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
  marginTop: "2rem",
  padding: ".5em .5em",
  borderRadius: "15px",
  border: "none",
  fontSize: "1.4rem",
  boxShadow: "rgba(0, 0, 0, 0.6) 0px 8px 15px;",
  cursor: "pointer",
  fontFamily: "Jacques Francois",
};

const labelStyle = {
  fontSize: "1.5em",
};

const formInner = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const message = {
  display: "flex",
  flexDirection: "column",
};

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ebd87e0f-9767-4819-a89e-9f8d21b9995f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div style={formBox}>
      <form style={formInner} onSubmit={onSubmit}>
        <div>
          <label style={labelStyle}>Name</label>
          <input
            style={formEnterField}
            type="text"
            name="user_name"
            required
          ></input>
          <br></br>
        </div>

        <div>
          <label style={labelStyle}>Email</label>
          <input
            style={formEnterField}
            type="email"
            name="user_email"
            required
          ></input>
          <br></br>
        </div>

        <div style={message}>
          <label style={labelStyle}>Message</label>
          <textarea
            style={formEnterFieldDetail}
            type="textarea"
            name="user_message"
            required
          ></textarea>
          <br></br>
        </div>

        <input style={formButtonSubmit} type="submit" value="Submit"></input>
        <p style={labelStyle}>{result}</p>
      </form>
    </div>
  );
};

export default ContactForm;
