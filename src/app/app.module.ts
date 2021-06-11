import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './firstcomponent/first-component';
import { SecondComponentComponent } from './second-component/second-component.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
