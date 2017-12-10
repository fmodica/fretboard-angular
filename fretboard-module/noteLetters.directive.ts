import { Directive } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';

@Directive({ selector: 'note-letters' })
export class NoteLettersDirective extends FretboardDataBinder<string[]> {
  public renderOnInitIfDefined = false;

  protected getFn(): string[] {
    return this.api.getNoteLetters();
  }
}
