import { Directive } from '@angular/core';
import { OnNotesChangedDataBinder } from './onNotesChangedDataBinder.directive';

@Directive({ selector: 'num-frets' })
export class NumFretsDirective extends OnNotesChangedDataBinder<number> {
  protected getFn(): number {
    return this.api.getNumFrets();
  }

  protected setFn(): void {
    this.api.setNumFrets(this.value);
    this.onNotesChanged.emit();
  }
}
