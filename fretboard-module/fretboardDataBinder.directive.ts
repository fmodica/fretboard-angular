
import { Input } from '@angular/core';
import { DataBinder } from './dataBinder.directive';

export abstract class FretboardDataBinder<T> extends DataBinder<T> {
  @Input() public api: any;
}
