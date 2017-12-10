import { Directive } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';

@Directive({ selector: 'note-circles' })
export class NoteCirclesDirective extends FretboardDataBinder<number[]> {
  protected getFn(): number[] {
    return this.api.getNoteCircles();
  }
}
