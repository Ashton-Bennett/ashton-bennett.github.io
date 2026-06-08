import "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/styles/buttonandbreakpoints.css";

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

const ChordForm = ({
  chordOne,
  chordTwo,
  chordThree,
  chordFour,
  handleChordOneChange,
  handleChordTwoChange,
  handleChordThreeChange,
  handleChordFourChange,
  chordSubmit,
  clearChordForm,
}) => {
  return (
    <div className="chordForm">
      <form onSubmit={chordSubmit} style={chordFormStyle}>
        <div style={inputLine}>
          <label>Key:</label>
          <input
            style={formEnterField}
            type="text"
            value={chordOne}
            onChange={handleChordOneChange}
            required
            title="Flat chords, 'B#', 'E#', and other random letters are not allowed"
            pattern="^((?!FB|CB|B#|E#|.B|.b).)*$"
            spellCheck="false"
          ></input>
        </div>
        <div style={inputLine}>
          <label>2nd:</label>
          <input
            style={formEnterField}
            type="text"
            value={chordTwo}
            onChange={handleChordTwoChange}
            title="Flat chords, 'B#', 'E#', and other random letters are not allowed"
            pattern="^((?!FB|CB|B#|E#|.B|.b).)*$"
            spellCheck="false"
          ></input>
        </div>
        <div style={inputLine}>
          <label>3rd:</label>
          <input
            style={formEnterField}
            type="text"
            value={chordThree}
            onChange={handleChordThreeChange}
            title="Flat chords, 'B#', 'E#', and other random letters are not allowed"
            pattern="^((?!FB|CB|B#|E#|.B|.b).)*$"
            spellCheck="false"
          ></input>
        </div>
        <div style={inputLine}>
          <label>4th:</label>
          <input
            style={formEnterField}
            type="text"
            value={chordFour}
            onChange={handleChordFourChange}
            title="Flat chords, 'B#', 'E#', and other random letters are not allowed"
            pattern="^((?!FB|CB|B#|E#|.B|.b).)*$"
            spellCheck="false"
          ></input>
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

export default ChordForm;
