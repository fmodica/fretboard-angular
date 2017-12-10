
import { Output, EventEmitter } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';

export abstract class OnNotesChangedDataBinder<T> extends FretboardDataBinder<T> {
  @Output() public onNotesChanged = new EventEmitter<void>(true);
}
