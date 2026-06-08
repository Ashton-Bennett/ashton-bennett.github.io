// used to determine the chord tonaility of the chords in a scale.
// Meant to be concatenated to the chord name (EX: C) so major tones are represented by an empty string.
const modeReferenceLookUp = {
  Ionian: ["", "m", "m", "", "", "m", "dim"],
  Dorian: ["m", "m", "", "", "m", "dim", ""],
  Phrygian: ["m", "", "", "m", "dim", "", "m"],
  Lydian: ["", "", "m", "dim", "", "m", "m"],
  Mixolydian: ["", "m", "dim", "", "m", "m", ""],
  Aeolian: ["m", "dim", "", "m", "m", "", ""],
  Locrian: ["dim", "", "m", "m", "", "", "m"],
};

// helps convert sharps/flats and remove items like Fb
// Remember: Fb and Cb dont exist
// Remember: B# and E# dont exist
const noteReferance = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

// function adds a flat to a note
const flatNote = (note) => {
  const index = noteReferance.indexOf(note);

  return index !== 0 ? noteReferance[index - 1] : noteReferance[11];
};

// function used to add a sharp to a note
const sharpNote = (note) => {
  const index = noteReferance.indexOf(note);
  return index !== 11 ? noteReferance[index + 1] : noteReferance[0];
};

// stores the notes in the major scales that are compared to the scale formulas to create more scales.
// remember: make sure to only use sharps here----> !E# &&& !B#
export const scaleReferance = {
  C: ["C", "D", "E", "F", "G", "A", "B"],
  "C#": ["C#", "D#", "F", "F#", "G#", "A#", "C"],
  D: ["D", "E", "F#", "G", "A", "B", "C#"],
  "D#": ["D#", "F", "G", "G#", "A#", "C", "D"],
  E: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  F: ["F", "G", "A", "A#", "C", "D", "E"],
  "F#": ["F#", "G#", "A#", "B", "C#", "D#", "F"],
  G: ["G", "A", "B", "C", "D", "E", "F#"],
  "G#": ["G#", "A#", "C", "C#", "D#", "F", "G"],
  A: ["A", "B", "C#", "D", "E", "F#", "G#"],
  "A#": ["A#", "C", "D", "D#", "F", "G", "A"],
  B: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
};

// compared to the scale referance to determine the notes of a scale.
const scaleFormulas = {
  Ionian: ["1", "2", "3", "4", "5", "6", "7"],
  Dorian: ["1", "2", "b3", "4", "5", "6", "b7"],
  Phrygian: ["1", "b2", "b3", "4", "5", "b6", "b7"],
  Lydian: ["1", "2", "3", "#4", "5", "6", "7"],
  Mixolydian: ["1", "2", "3", "4", "5", "6", "b7"],
  Aeolian: ["1", "2", "b3", "4", "5", "b6", "b7"],
  Locrian: ["1", "b2", "b3", "4", "b5", "b6", "b7"],
  "Minor Pentatonic": ["1", "b3", "4", "5", "b7"],
  "Major Pentatonic": ["1", "2", "3", "5", "6"],
  "Major Arpeggio": ["1", "3", "5"],
  "Minor Arpeggio": ["1", "b3", "5"],
  "Minor Blues": ["1", "b3", "4", "b5", "5", "b7"],
  "Major Blues": ["1", "2", "b3", "3", "5", "6"],
  "Harmonic Minor": ["1", "2", "b3", "4", "5", "b6", "7"],
  "Harmonic Major": ["1", "2", "3", "4", "5", "b6", "7"],
  Byzantine: ["1", "b2", "3", "4", "5", "b6", "7"],
  Enigmatic: ["1", "b2", "3", "#4", "#5", "#6", "7"],
  Persian: ["1", "b2", "3", "4", "b5", "b6", "7"],
  "Javanese Pelog": ["1", "b2", "b3", "4", "5", "6", "b7"],
  "Neapolitan Minor": ["1", "b2", "b3", "4", "5", "b6", "7"],
  "Hungarian Minor": ["1", "2", "b3", "#4", "5", "b6", "7"],
  Hindu: ["1", "2", "3", "4", "5", "b6", "b7"],
  Romanian: ["1", "b2", "3", "#4", "5", "6", "b7"],
  "Spanish Gipsy": ["1", "b2", "3", "4", "5", "b6", "b7"],
  Arabian: ["1", "2", "3", "4", "b5", "b6", "b7"],
  Asian: ["1", "b2", "3", "4", "b5", "6", "b7"],
  Prometheus: ["1", "2", "3", "#4", "6", "b7"],
  Ritsu: ["1", "b2", "b3", "4", "b6", "b7"],
  "In Sen": ["1", "b2", "4", "5", "b7"],
  Iwato: ["1", "b2", "4", "b5", "b7"],
  Scottish: ["1", "2", "4", "5", "6"],
  "Han-Kumoi": ["1", "2", "4", "5", "b6"],
  "Hon-Kumoi-Joshi": ["1", "b2", "4", "5", "b6"],
  Egyptian: ["1", "2", "4", "5", "b7"],
  Hirajoshi: ["1", "2", "b3", "5", "b6"],
  "Balinese Pelog": ["1", "b2", "b3", "5", "b6"],
};

// adjusts the chord param to be displayed. Ex: C#m returns C# for displaying C# Dorian.
export const rootNoteFinder = (chordOne) => {
  return chordOne[1] === "#" ? chordOne[0].concat("#") : chordOne[0];
};

export const notesOfAScale = (name, chord) => {
  const chordOne = rootNoteFinder(chord);

  var notesToDisplay = [];
  // compares the scale formula with the chordOne ref scale(major scale)
  // also handles cases of when flats are provided and converts to a sharp
  for (let i = 0; i < scaleFormulas[name].length; i++) {
    var scaleDegree = scaleFormulas[name][i];

    if (scaleDegree.length === 1) {
      notesToDisplay = notesToDisplay.concat(
        scaleReferance[rootNoteFinder(chordOne).toUpperCase()][scaleDegree - 1],
      );
    } else {
      if (scaleDegree.includes("b")) {
        scaleDegree = scaleDegree[1];
        notesToDisplay = notesToDisplay.concat(
          flatNote(scaleReferance[rootNoteFinder(chordOne)][scaleDegree - 1]),
        );
      } else {
        scaleDegree = scaleDegree[1];
        notesToDisplay = notesToDisplay.concat(
          sharpNote(scaleReferance[rootNoteFinder(chordOne)][scaleDegree - 1]),
        );
      }
    }
  }

  return notesToDisplay;
};

const findChordTonailities = (scaleNotes, modeName) => {
  const modeRef = modeReferenceLookUp[modeName];
  const chords = [];
  for (let i = 0; i < scaleNotes.length; i++) {
    chords.push(scaleNotes[i] + modeRef[i]);
  }
  return chords;
};

export const chordsOfAScale = (name, chord) => {
  const rootNote = rootNoteFinder(chord);
  const notesInScale = notesOfAScale(name, rootNote);
  const chordTonailities = findChordTonailities(notesInScale, name);
  return chordTonailities;
};
