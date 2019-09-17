import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ModalComponent } from './modal/modal.component';
import { ToggleDirective } from './toggle.directive';
import { DirThatSetsStylesDirective } from './dir-that-sets-styles.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ModalComponent,
    ToggleDirective,
    DirThatSetsStylesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
