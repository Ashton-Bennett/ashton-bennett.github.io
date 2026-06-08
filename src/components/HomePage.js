import { Link } from "react-router-dom";
import guitarGuy from "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/images/afro_guitarist.png";
import "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/styles/buttonandbreakpoints.css";

const mainContent = {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  flexGrow: "1",
  height: "80%",
};

const textWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "1rem",
  alignSelf: "center",
};

const textTitle = {
  fontWeight: "500",
  fontSize: "4.8rem",
  marginBottom: "2.2rem",
  marginTop: "0",
  paddingLeft: "12rem",
};

export const subtitle = {
  fontWeight: "500",
  fontSize: "2.4em",
  marginBottom: "5rem",
  paddingLeft: "12rem",
};

const button = {
  color: "white",
  backgroundColor: "#2EB718",
  marginTop: "6rem",
  padding: ".75rem 3.5rem",
  borderRadius: ".5rem",
  textDecoration: "none",
  border: "none",
  fontSize: "1.5rem",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.60)",
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
};

const imgWrapper = {
  paddingTop: "80px",
  display: "flex",
  maxHeight: "80vh",
  maxWidth: "40vw",
  justifyContent: "flex-end",
  zIndex: "-1",
};

const circle1 = {
  position: "absolute",
  width: "18em",
  height: "18em",
  borderRadius: "50%",
  backgroundColor: "rgba(46, 183, 24, .10)",
  bottom: "5%",
  left: "45%",
  zIndex: -2,
};

const circle2 = {
  position: "absolute",
  width: "11em",
  height: "11em",
  borderRadius: "50%",
  backgroundColor: "rgba(46, 183, 24, .10)",
  top: "15vh",
  left: "60%",
  zIndex: -2,
};

const circle3 = {
  position: "absolute",
  width: "8em",
  height: "8em",
  borderRadius: "50%",
  backgroundColor: "rgba(227, 148, 28, 0.10)",
  bottom: "40%",
  left: "85%",
  zIndex: -2,
};

const HomePage = () => {
  return (
    <>
      <section style={mainContent}>
        <div style={textWrapper}>
          <h1 style={textTitle}>Scale finder</h1>
          <div style={subtitle}>
            <>Enter chords</> <br></br>
            <>Select scale</> <br></br>
            <>Rock out</> <br></br>
            <Link style={{ textDecoration: "none" }} to="/Finder">
              <button className="button" style={button}>
                Enter
              </button>
            </Link>
          </div>
        </div>
        <div style={imgWrapper}>
          <img src={guitarGuy} alt="Guitarist" className="guitaristImg"></img>
          <div style={circle1}> </div>
          <div style={circle2}> </div>
          <div style={circle3}> </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
