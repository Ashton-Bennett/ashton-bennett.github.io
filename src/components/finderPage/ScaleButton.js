import "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/styles/buttonandbreakpoints.css";
import { notesOfAScale } from "../musicTheoryUtils";
import { rootNoteFinder } from "../musicTheoryUtils";
import { fretboardObj } from "../fretBoard";

// style for the scale buttons
const findButton = {
  color: "white",
  width: "30%",
  backgroundColor: "#2EB718",
  marginLeft: "1em",
  marginBottom: "1em",
  padding: ".5em .5em",
  borderRadius: ".5em",
  border: "none",
  fontSize: "1rem",
  boxShadow: "0px 16px 15px rgba(0, 0, 0, 0.80)",
  cursor: "pointer",
  fontFamily: "Jacques Francois",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// creates the button that onced clicked will display the fretboard diagram
const ScaleButton = ({
  name,
  chordOne,
  setCoordinatesToShow,
  setScaleToDisplay,
}) => {
  const scaleToDisplay = async (event) => {
    event.preventDefault();

    // will first set coordinates to nothing removing the diagram
    await setCoordinatesToShow([]);

    // takes the information needed from the form to find the key and sets name of the scale to be rendered
    setScaleToDisplay(`${rootNoteFinder(chordOne)} ${name}`);

    const notes = notesOfAScale(name, chordOne);
    console.log(notes);
    // loops over the fretboard obj to find the coordinates needed to display and sets the state to display them
    var coordinates = [];

    for (let i = 0; i < notes.length; i++) {
      coordinates = coordinates.concat(fretboardObj[notes[i]]);
    }
    setCoordinatesToShow(coordinates);
  };

  return (
    <button style={findButton} className="button" onClick={scaleToDisplay}>
      {name}
    </button>
  );
};

export default ScaleButton;
