import { Directive } from '@angular/core';
import { FretboardDataBinder } from './fretboardDataBinder.directive';

@Directive({ selector: 'animation-speed' })
export class AnimationSpeedDirective extends FretboardDataBinder<number> {
  public getFn(): number {
    return this.api.getAnimationSpeed();
  }
}
