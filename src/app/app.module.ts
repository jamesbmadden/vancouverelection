import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiniComponent } from './mini/mini.component';
import { CityComponent } from './city/city.component';
import { CandidateComponent } from './candidate/candidate.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniComponent,
    CityComponent,
    CandidateComponent,
    DialogueComponent,
    BottomBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
