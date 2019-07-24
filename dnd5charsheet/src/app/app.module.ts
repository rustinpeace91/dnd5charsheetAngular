import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CharsheetComponent } from './charsheet/charsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharsheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
