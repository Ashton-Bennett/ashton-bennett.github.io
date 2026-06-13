import "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/styles/buttonandbreakpoints.css";
import React from "react";
import { chordsOfAScale } from "../musicTheoryUtils";

const formEnterField = {
  margin: ".75em 1em",
  fontSize: "1.5rem",
  color: "white",
  border: "solid 1px",
  borderColor: "#2EB718",
  borderRadius: "5px",
  backgroundColor: "#201D1D",
  outline: "none",
};

const findButton = {
  color: "white",
  width: "5em",
  backgroundColor: "#2EB718",
  marginLeft: "1em",
  marginRight: ".5em",
  marginTop: "1em",
  padding: ".5em .5em",
  borderRadius: ".5rem",
  border: "none",
  fontSize: "1.4rem",
  boxShadow: "0px 16px 15px rgba(0, 0, 0, 0.80)",
  cursor: "pointer",
  fontFamily: "Jacques Francois",
};

const formButtonClear = {
  backgroundColor: "#E3941C",
  color: "white",
  width: "5em",
  marginLeft: "1em",
  marginRight: ".5em",
  marginTop: "1em",
  padding: ".5em .5em",
  borderRadius: ".5rem",
  border: "none",
  fontSize: "1.4rem",
  boxShadow: "0px 16px 15px rgba(0, 0, 0, 0.80)",
  cursor: "pointer",
  fontFamily: "Jacques Francois",
};

const chordFormStyle = {
  backgroundColor: "#201D1D",
  borderRadius: "10px",
  margin: "3rem",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.60)",
  padding: "3em",
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  alignItems: "center",
};

const inputLine = {
  display: "flex",
  alignItems: "center",
};

const chordsDisplay = {
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
};

const chordCard = {
  color: "white",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "2.5rem",
};

const numbers = {
  background: "linear-gradient(to bottom, #2eb718, #e3941c)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  marginBottom: "0",
};

const ChordPage = () => {
  const [key, setKey] = React.useState("");
  const [mode, setMode] = React.useState("Ionian");
  const [chords, setChords] = React.useState([]);

  const submit = (event) => {
    event.preventDefault();
    const chordsToDisplay = chordsOfAScale(mode, key);

    setChords(chordsToDisplay);
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const clearChordForm = (event) => {
    event.preventDefault();
    setChords([]);
  };

  const romainNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];

  return (
    <div className="chordForm">
      <form onSubmit={submit} style={chordFormStyle}>
        {chords.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <div style={chordsDisplay}>
              {chords.map((chord, i) => (
                <div style={chordCard} key={chord}>
                  <h2 style={numbers}>{romainNumerals[i]}</h2>
                  <h3>{chord}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
        <div style={inputLine}>
          <label>Key:</label>
          <input
            style={formEnterField}
            type="text"
            value={key}
            onChange={handleKeyChange}
            required
            title="Flat chords, 'B#', 'E#', and other random letters are not allowed"
            pattern="^((?!FB|CB|B#|E#|.B|.b).)*$"
            spellCheck="false"
          ></input>
        </div>
        <div style={inputLine}>
          <label>Mode:</label>
          <select
            style={formEnterField}
            onChange={handleModeChange}
            value={mode}
            required
          >
            <option value="Ionian">Ionian</option>
            <option value="Dorian">Dorian</option>
            <option value="Phrygian">Phrygian</option>
            <option value="Lydian">Lydian</option>
            <option value="Mixolydian">Mixolydian</option>
            <option value="Aeolian">Aeolian</option>
            <option value="Locrian">Locrian</option>
          </select>
        </div>
        <div style={inputLine}>
          <button className="button" style={findButton} type="submit">
            Find
          </button>
          <button
            className="button"
            style={formButtonClear}
            onClick={clearChordForm}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChordPage;
