import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[dir-that-sets-styles]'
})
export class DirThatSetsStylesDirective {
  @HostBinding('style')
  @Input('dir-that-sets-styles')
  public styles = null;

  constructor() {
  }
}
