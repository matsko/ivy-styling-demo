import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ToggleEvent} from '../toggle.directive';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Output('toggle')
  public toggleEmitter = new EventEmitter();

  @Input('templateStyles')
  templateStyles = null;

  @Input('directiveStyles')
  directiveStyles = null;

  @Input('width')
  width = null;

  @Input('height')
  height = null;

  @Input('transform')
  transform = null;

  emitToggle(event: ToggleEvent) {
    this.toggleEmitter.emit(event);
  }
}
