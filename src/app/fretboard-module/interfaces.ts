export interface IFretboardConfig {
  noteLetters?: string[];
  tuning?: INote[];
  numFrets?: number;
  isChordMode?: boolean;
  noteClickingDisabled?: boolean;
  noteMode?: string;
  intervals?: string[];
  root?: string;
  animationSpeed?: number;
  noteCircles?: number[];
  dimensionsFunc?: ($fretboardContainer: any, $fretboardBody: any, rendererModel: any) => IWidthHeightPair;
  notesClickedCallback?: () => void;
  clickedNotes?: IStringedNoteGroup[];
  allNotes?: IStringedNoteGroup[];
}

export interface INote {
  letter: string;
  octave: number;
}

export interface IStyledFrettedNote {
  fret: number;

  // When setting clicked notes you only have to set the fret number, but the
  // fretboard component will then bind the letter, octave, interval, and CSS class.
  letter?: string;
  octave?: number;
  interval?: string;
  cssClass?: string;
}

export interface IStringedNoteGroup {
  string: INote;
  notes: IStyledFrettedNote[];
}

export interface IWidthHeightPair {
  width?: number;
  height?: number;
}
