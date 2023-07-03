import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { warning } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import {name} from "./name/name.component";
import { AgeComponent } from './age/age.component'
import { Assignment } from './assignment/assignment.component';


@NgModule({
  declarations: [
    AppComponent,
    warning,
    SuccessComponent,
    name,
    AgeComponent,
    Assignment
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



