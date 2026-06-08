import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const textWrapper = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
  height: "77%",
};

const textTitle = {
  fontWeight: "500",
  fontSize: "4.8rem",
  marginTop: "0",
  paddingLeft: "12rem",
};

const subtitle = {
  fontWeight: "500",
  fontSize: "2.4em",
  marginBottom: "5rem",
  paddingLeft: "12rem",
  paddingTop: "4rem",
};

const musicNote1 = {
  height: "15rem",
  zIndex: "-1",
  color: "rgba(46, 183, 24, 0.10)",
  position: "absolute",
  left: "27vw",
  top: "35vh",
};

const musicNote2 = {
  height: "15rem",
  zIndex: "-1",
  color: "rgba(227, 148, 28, 0.10)",
  position: "absolute",
  left: "11vw",
  bottom: "5vh",
};

const musicNote3 = {
  height: "15rem",
  zIndex: "-1",
  color: "rgba(227, 148, 28, 0.10)",
  position: "absolute",
  right: "10vw",
  bottom: "15vh",
};

const About = () => {
  return (
    <div style={textWrapper}>
      <h1 style={textTitle}>Amp Guitar</h1>
      <div style={subtitle}>
        Bringing you tools to amplifiy your guitar skills
      </div>
      <FontAwesomeIcon icon={faMusic} style={musicNote1} />
      <FontAwesomeIcon icon={faMusic} style={musicNote2} />
      <FontAwesomeIcon icon={faMusic} style={musicNote3} />
    </div>
  );
};

export default About;
