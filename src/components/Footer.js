import { Link } from "react-router-dom";

const footerStyle = {
  display: "flex",
  borderTop: "solid 1px",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1.35rem",
  color: "inherit",
  height: "60px",
  left: "0",
  right: "0",
  marginbottom: "1em",
};

const footNav = {
  display: "flex",
  listStyle: "none",
  justifyContent: "space-between",
  marginLeft: "4.5em",
};

const copywrite = {
  display: "flex",
  alignItems: "center",
  color: "inherit",
  minWidth: "50vw",
  fontSize: ".8rem",
};

const about = {
  paddingLeft: "3rem",
};
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <nav>
        <ul style={footNav}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/Contact"
          >
            <li className="footerbutton">Contact</li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/About"
          >
            <li className="footerbutton" style={about}>
              About us
            </li>
          </Link>
        </ul>
      </nav>
      <p style={copywrite}>Copywrite © 2022. All rights reserved</p>
    </footer>
  );
};

export default Footer;
