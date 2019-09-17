import { Directive, HostListener, HostBinding, Input, Output } from '@angular/core';
import {EventEmitter} from 'events';
import {Subject} from 'rxjs';

export interface ToggleEvent {
  name: string;
  value: boolean;
}

@Directive({
  selector: '[toggle]'
})
export class ToggleDirective {
  @HostBinding('class.noop')
  @Input('toggle-noop')
  public noop: boolean;

  @Input('toggle')
  public name: string|null = null;

  @Output('toggle')
  public toggleListener = new Subject();

  @HostBinding('class.active')
  @Input('toggle-active')
  public active = null;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.noop) return;
    event.stopPropagation();
    this.active = !this.active;
    const value: ToggleEvent = {
      name: this.name, value: this.active
    };
    this.toggleListener.next(value as any);
  }
}
