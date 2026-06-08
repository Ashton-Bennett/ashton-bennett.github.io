import { Fretboard } from "@moonwave99/fretboard.js";
import "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/styles/buttonandbreakpoints.css";
import React, { useEffect } from "react";
import { fretboardObj } from "../fretBoard";

const syleToShowUp = {
  width: "100%",
  maxWidth: "50vw",
  background: "white",
  borderRadius: "5px",
  border: "5px solid black",
  fontSize: "4rem",
};

const FretBoard = ({ coordinatesToShow, chordOne }) => {
  useEffect(() => {
    const fretboard = new Fretboard({
      el: "#fretboard",
      stringWidth: 5,
      stringColor: "#201D1D",
      fretColor: "#201D1D",
      fretCount: 24,
      fretWidth: 4,
      nutWidth: 10,
      nutColor: "#000000",
      middleFretColor: "#E3941C",
      middleFretWidth: 6,
      scaleFrets: false,
      height: 500,
      width: 1300,
      dotSize: 40,
      dotFill: "#201D1D",
      dotStrokeColor: "#000000",
      fretNumbersColor: "#000000",
      fretNumbersMargin: 50,
      font: "inherit",
      highlightPadding: 0,
      highlightRadius: 5,
      highlightFill: "#E3941C",
      highlightStroke: "transparent",
      highlightBlendMode: "color-burn",
    });

    const alteredChordOne = chordOne
      .split("")
      .filter((x) => x !== "M")
      .join("");
    const fretBoardWithOrangeDots = fretboardObj[alteredChordOne].map(
      (obj) => ({ ...obj, interval: 1 }),
    );
    const coordinatesWithOrangeDots = coordinatesToShow.concat(
      fretBoardWithOrangeDots,
    );

    fretboard
      .setDots(coordinatesWithOrangeDots)
      .render()
      .style({
        filter: { interval: 1 },
        fill: "#E3941C",
      });
  }, []);

  return <figure id="fretboard" style={syleToShowUp}></figure>;
};

export default FretBoard;
