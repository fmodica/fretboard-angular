import { Directive } from '@angular/core';
import { OnNotesChangedDataBinder } from './onNotesChangedDataBinder.directive';

@Directive({ selector: 'interval-root' })
export class IntervalRootDirective extends OnNotesChangedDataBinder<string> {
  protected getFn(): string {
    return this.api.getRoot();
  }

  protected setFn(): void {
    this.api.setRoot(this.value);
    this.onNotesChanged.emit();
  }
}
