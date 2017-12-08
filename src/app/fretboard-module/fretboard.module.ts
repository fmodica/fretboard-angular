import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FretboardComponent } from './fretboard.component';
import { TuningDirective } from './tuning.directive';
import { NumFretsDirective } from './numFrets.directive';
import { IsChordModeDirective } from './isChordMode.directive';
import { NoteClickingDisabledDirective } from './noteClickingDisabled.directive';
import { NoteModeDirective } from './noteMode.directive';
import { IntervalsDirective } from './intervals.directive';
import { IntervalRootDirective } from './intervalRoot.directive';
import { NoteLettersDirective } from './noteLetters.directive';
import { AnimationSpeedDirective } from './animationSpeed.directive';
import { NoteCirclesDirective } from './noteCircles.directive';
import { DimensionsFuncDirective } from './dimensionsFunc.directive';
import { ClickedNotesDirective } from './clickedNotes.directive';
import { AllNotesDirective } from './allNotes.directive';

import * as Interfaces from './interfaces';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FretboardComponent,
    TuningDirective,
    NumFretsDirective,
    IsChordModeDirective,
    NoteClickingDisabledDirective,
    NoteModeDirective,
    IntervalsDirective,
    IntervalRootDirective,
    NoteLettersDirective,
    AnimationSpeedDirective,
    NoteCirclesDirective,
    DimensionsFuncDirective,
    ClickedNotesDirective,
    AllNotesDirective
  ],
  providers: [],
  exports: [FretboardComponent]
})
class FretboardModule { }

export { FretboardModule, Interfaces }
