import { Directive, OnInit, Output, EventEmitter } from '@angular/core';
import { OnNotesChangedDataBinder } from './onNotesChangedDataBinder.directive';
import { IStringedNoteGroup } from './interfaces';

@Directive({ selector: 'clicked-notes' })
export class ClickedNotesDirective extends OnNotesChangedDataBinder<IStringedNoteGroup[]> implements OnInit {
  @Output() public registerClickedNotesModelUpdateFn = new EventEmitter<() => void>(true);

  protected renderOnInitIfDefined = true;

  public ngOnInit(): void {
    this.registerClickedNotesModelUpdateFn.emit(() => this.updateModel());
  }

  protected getFn(): IStringedNoteGroup[] {
    return this.api.getClickedNotes();
  }

  protected setFn(): void {
    this.api.clearClickedNotes();
    this.api.setClickedNotes(this.value);
    this.onNotesChanged.emit();
  }
}
