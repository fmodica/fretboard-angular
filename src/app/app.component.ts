import { Component } from '@angular/core';
import { Interfaces } from '../../fretboard-module/fretboard.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public config: Interfaces.IFretboardConfig = {};
}
