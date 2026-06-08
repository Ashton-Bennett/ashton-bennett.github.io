import Header from "./components/Header.js";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Finder from "./components/finderPage/Finder.js";
import About from "./components/About.js";
import Contact from "./components/contactPage/Contact.js";
import Chord from "./components/chordPage/ChordPage.js";

function App() {
  const main = {
    width: "100vw",
    height: "100vh",
    color: "#FAF6F6",
    fontFamily: "Jacques Francois | sans-serif",
    padding: "0",
    margin: "0,",
    boxSizing: "border-box",
  };

  return (
    <Router>
      <div style={main}>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Finder">
            <Finder />
          </Route>
          <Route path="/Chord">
            <Chord />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
