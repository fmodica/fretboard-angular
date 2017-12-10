import { Directive } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';
import { IWidthHeightPair } from './interfaces';

@Directive({ selector: 'dimensions-func' })
export class DimensionsFuncDirective extends FretboardDataBinder<() => IWidthHeightPair> {
  protected getFn(): () => IWidthHeightPair {
    return this.api.getDimensionsFunc();
  }
}
