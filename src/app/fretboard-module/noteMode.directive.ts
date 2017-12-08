import { Directive } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';

@Directive({ selector: 'note-mode' })
export class NoteModeDirective extends FretboardDataBinder<string> {
  protected getFn(): string {
    return this.api.getNoteMode();
  }

  protected setFn(): void {
    this.api.setNoteMode(this.value);
  }
}
