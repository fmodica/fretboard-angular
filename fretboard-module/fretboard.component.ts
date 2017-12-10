import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import { IFretboardConfig } from './interfaces';

@Component({
  selector: 'fretboard',
  templateUrl: './fretboard.component.html'
})
export class FretboardComponent implements OnInit, OnDestroy {
  @Input() public config: IFretboardConfig;
  public api: any;

  @ViewChild('fretboard') private fretboardEl: ElementRef;
  private jQuery = window['jQuery'];
  private modelUpdateIsScheduled = false;
  private updateClickedNotesModel: () => void;
  private updateAllNotesModel: () => void;
  private onClickedNotesModelUpdated: () => void;

  public ngOnInit(): void {
    if (!this.config) {
      throw new Error('The \"config\" object is not defined. Place it on your component and pass it into the fretboard component.');
    }

    let $fretboardEl = this.jQuery(this.fretboardEl.nativeElement);
    let configCopy = this.jQuery.extend(true, {}, this.config);
    let originalNotesClickedCallback = configCopy.notesClickedCallback;

    // The plugin gets a function which updates the model, so that can happen before
    // the original callback is invoked.
    configCopy.notesClickedCallback = () => this.updateClickedNotesModel();

    // The original callback gets invoked with onValueChange after clicked notes have
    // been updated on the model.
    this.onClickedNotesModelUpdated = originalNotesClickedCallback || (() => { });

    $fretboardEl.fretboard(configCopy);
    this.api = $fretboardEl.data('api');
  }

  public registerAllNotesModelUpdateFn(updateAllNotesModel: () => void): void {
    this.updateAllNotesModel = updateAllNotesModel;
  }

  public registerClickedNotesModelUpdateFn(updateClickedNotesModel: () => void): void {
    this.updateClickedNotesModel = updateClickedNotesModel;
  }

  public onNotesChanged(): void {
    if (this.modelUpdateIsScheduled) return;

    this.modelUpdateIsScheduled = true;

    setTimeout(() => {
      this.updateClickedNotesModel();
      this.updateAllNotesModel();
      this.modelUpdateIsScheduled = false;
    });
  }

  public ngOnDestroy(): void {
    this.api.destroy();
  }
}
