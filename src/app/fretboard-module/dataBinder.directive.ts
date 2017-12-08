import { OnChanges, Input, Output, EventEmitter } from '@angular/core';

export abstract class DataBinder<T> implements OnChanges {
  @Input() public value: T;
  @Output() public valueChange = new EventEmitter<T>(true);

  protected renderOnInitIfDefined = false;

  private isFirstModelChange = true;
  private ignoreModelChange = false;

  public ngOnChanges(): void {
    if (this.ignoreModelChange) {
      this.ignoreModelChange = false;
      return;
    }

    if (this.shouldRender()) {
      this.render();
    }

    if (this.shouldUpdateModel()) {
      this.updateModel();
    }

    this.isFirstModelChange = false;
  }

  protected abstract getFn(): T;

  protected setFn(): void { };

  protected render(): void {
    this.setFn();
  }

  protected updateModel(): void {
    this.ignoreModelChange = true;
    this.valueChange.emit(this.getFn());
  }

  private shouldRender(): boolean {
    return !!(!this.isFirstModelChange || (this.isFirstModelChange && this.renderOnInitIfDefined && !this.isUndefinedOrNull(this.value)));
  }

  private shouldUpdateModel(): boolean {
    return !!(this.isFirstModelChange && this.isUndefinedOrNull(this.value));
  }

  private isUndefinedOrNull(value: any): boolean {
    return !!(value === undefined || value === null);
  }
}
