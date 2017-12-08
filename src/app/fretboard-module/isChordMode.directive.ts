import { Directive } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';

@Directive({ selector: 'is-chord-mode' })
export class IsChordModeDirective extends FretboardDataBinder<boolean> {
  protected getFn(): boolean {
    return this.api.getChordMode();
  }

  protected setFn(): void {
    this.api.setChordMode(this.value);
  }
}
