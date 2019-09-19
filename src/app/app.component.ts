import { Component } from '@angular/core';
import {ToggleEvent} from './toggle.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _toggles = {
    'style.width': true,
    'style.height': true,
    'style.transform': true,
    'style': true,
    'dir-styles': true,
    'modal-styles': true,
  };

  private _values = {
    'style.width': '800px',
    'style.height': '800px',
    'style.transform': 'none',
    'style': {
      width: '600px',
      height: '500px',
      border: '10px solid black',
    },
    'dir-styles': {
      'transform': 'rotate(-2deg)'
    },
    'modal-styles': {
      width: '90%',
      height: '90%',
      'box-shadow': '0 0 10px black',
    }
  };

  getValue(name: string) {
    return this._toggles[name] ? this._values[name] : null;
  }

  getBinding(name: string) {
    return {value: this._values[name], active: this._toggles[name]};
  }

  onToggle(event: ToggleEvent) {
    this._toggles[event.name] = event.value;
  }
}
