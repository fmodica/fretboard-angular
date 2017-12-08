import { Directive, OnInit, Output, EventEmitter } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';
import { IStringedNoteGroup } from './interfaces';

@Directive({ selector: 'all-notes' })
export class AllNotesDirective extends FretboardDataBinder<IStringedNoteGroup[]> implements OnInit {
  @Output() public registerAllNotesModelUpdateFn = new EventEmitter<() => void>(true);

  public ngOnInit(): void {
    this.registerAllNotesModelUpdateFn.emit(() => this.updateModel());
  }

  protected getFn(): IStringedNoteGroup[] {
    return this.api.getAllNotes();
  }
}
