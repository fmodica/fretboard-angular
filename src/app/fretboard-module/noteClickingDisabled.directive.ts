import { Directive } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';

@Directive({ selector: 'note-clicking-disabled' })
export class NoteClickingDisabledDirective extends FretboardDataBinder<boolean> {
  protected getFn(): boolean {
    return this.api.getNoteClickingDisabled();
  }

  protected setFn(): void {
    this.api.setNoteClickingDisabled(this.value);
  }
}
