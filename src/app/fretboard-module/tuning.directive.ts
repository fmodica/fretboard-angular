import { Directive, Input } from '@angular/core';
import { OnNotesChangedDataBinder } from './onNotesChangedDataBinder.directive';
import { INote } from './interfaces';

@Directive({ selector: 'tuning' })
export class TuningDirective extends OnNotesChangedDataBinder<INote[]> {
  protected getFn(): INote[] {
    return this.api.getTuning();
  }

  protected setFn(): void {
    this.api.setTuning(this.value);
    this.onNotesChanged.emit();
  }
}
