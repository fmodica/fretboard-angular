import { Directive } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';

@Directive({ selector: 'intervals' })
export class IntervalsDirective extends FretboardDataBinder<string[]> {
  protected getFn(): string[] {
    return this.api.getIntervals();
  }
}
