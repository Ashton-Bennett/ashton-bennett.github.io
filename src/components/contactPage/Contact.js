import ContactForm from "./ContactForm";

const flexContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "80vh",
  width: "100%",
};

const textTitle = {
  fontWeight: "500",
  fontSize: "4.8rem",
  marginTop: "0",
  marginBottom: "20px",
  paddingTop: "0",
};

const Contact = () => {
  return (
    <div style={flexContainer}>
      <h1 style={textTitle}>Drop us a line</h1>
      <ContactForm />
    </div>
  );
};
export default Contact;
