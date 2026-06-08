import ChordForm from "./ChordForm";
import ScaleButton from "./ScaleButton";
import { useState } from "react";
import FretBoard from "./FretBoard";
import { notesOfAScale, rootNoteFinder } from "../musicTheoryUtils";

const finderBody = {
  display: "flex",
  flexDirection: "column",
  minHeight: "80%",
};
const MainContentContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: "0",
  padding: "7em",
  height: "55%",
  flex: 1,
};

const scaleDisplayContainer = {
  backgroundColor: "#201D1D",
  margin: "0, 2rem",
  borderRadius: "10px",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.60)",
  display: "flex",
  width: "100%",
};

const scaleDisplayLeft = {
  paddingRight: ".5em",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "stretch",
  marginBottom: "2em",
  width: "70%",
  maxHeight: "700px",
};

const scaleDisplayRight = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
  justifyContent: "center",
  width: "100%",
  minWidth: "60%",
  paddingRight: "3em",
  paddingBottom: "2em",
};

const intialDirections = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
};

export const subtitle = {
  fontWeight: "500",
  fontSize: "2em",
  marginLeft: "2em",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
};

export const Title = {
  fontWeight: "500",
  fontSize: "2.4rem",
  marginBottom: "0px",
};

const gradientTitle = {
  fontWeight: "500",
  fontSize: "2.4rem",
  marginBottom: "0px",
  background: "linear-gradient(to bottom, #2EB718, #E3941C)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const Finder = (props) => {
  const [chordOne, setChordOne] = useState("");
  const [chordTwo, setChordTwo] = useState("");
  const [chordThree, setChordThree] = useState("");
  const [chordFour, setChordFour] = useState("");
  const [scales, setScales] = useState([]);
  const [coordinatesToShow, setCoordinatesToShow] = useState([]);
  const [scaleToDisplay, setScaleToDisplay] = useState("");

  const majorScales = [
    "Ionian",
    "Lydian",
    "Mixolydian",
    "Major Pentatonic",
    "Major Arpeggio",
    "Major Blues",
    "Harmonic Major",
    "Byzantine",
    "Enigmatic",
    "Persian",
    "Hindu",
    "Romanian",
    "Spanish Gipsy",
    "Arabian",
    "Asian",
    "Prometheus",
    "Scottish",
  ];
  const minorScales = [
    "Dorian",
    "Phrygian",
    "Aeolian",
    "Locrian",
    "Minor Pentatonic",
    "Minor Arpeggio",
    "Minor Blues",
    "Harmonic Minor",
    "Javanese Pelog",
    "Neapolitan Minor",
    "Hungarian Minor",
    "Ritsu",
    "In Sen",
    "Iwato",
    "Han-Kumoi",
    "Hon-Kumoi-Joshi",
    "Egyptian",
    "Hirajoshi",
    "Balinese Pelog",
  ];

  const clearChordForm = (event) => {
    setChordOne("");
    setChordTwo("");
    setChordThree("");
    setChordFour("");
    setScales([]);
    setCoordinatesToShow([]);
  };

  const chordSubmit = (event) => {
    event.preventDefault();

    let chords = [chordOne, chordTwo, chordThree, chordFour];
    const scalesMinorOrMajor = chords[0].includes("M")
      ? minorScales
      : majorScales;

    let alteredChords = chords.map((x) => rootNoteFinder(x));
    alteredChords = alteredChords.filter((chord) => chord !== undefined);

    const showScales = scalesMinorOrMajor.filter((x) =>
      alteredChords.every((note) => notesOfAScale(x, chordOne).includes(note)),
    );

    setScales(showScales);
  };

  return (
    <div style={finderBody}>
      <div style={MainContentContainer}>
        <div style={scaleDisplayContainer}>
          {scales.length === 0 && (
            <div style={intialDirections}>
              <h1>Enter chords below</h1>
            </div>
          )}

          {scales.length > 0 && (
            <div style={scaleDisplayLeft}>
              <p style={subtitle}>Pick a scale to display</p>
              {scales.map((scale) => (
                <ScaleButton
                  key={scale}
                  name={scale}
                  chordOne={chordOne}
                  coordinatesToShow={coordinatesToShow}
                  setCoordinatesToShow={setCoordinatesToShow}
                  setScaleToDisplay={setScaleToDisplay}
                />
              ))}
            </div>
          )}

          {coordinatesToShow.length > 0 && (
            <div style={scaleDisplayRight}>
              <h3 style={gradientTitle}>{scaleToDisplay}</h3>
              <FretBoard
                coordinatesToShow={coordinatesToShow}
                chordOne={chordOne}
              />
            </div>
          )}
        </div>
        <ChordForm
          chordOne={chordOne}
          chordTwo={chordTwo}
          chordThree={chordThree}
          chordFour={chordFour}
          chordSubmit={chordSubmit}
          handleChordOneChange={({ target }) =>
            setChordOne(target.value.toUpperCase())
          }
          handleChordTwoChange={({ target }) =>
            setChordTwo(target.value.toUpperCase())
          }
          handleChordThreeChange={({ target }) =>
            setChordThree(target.value.toUpperCase())
          }
          handleChordFourChange={({ target }) =>
            setChordFour(target.value.toUpperCase())
          }
          clearChordForm={clearChordForm}
        />
      </div>
    </div>
  );
};

export default Finder;
