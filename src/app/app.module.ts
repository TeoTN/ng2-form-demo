import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ValidatedFormComponent } from './validated-form.component';
import { ValidationControlComponent } from './validation-control.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ValidatedFormComponent, ValidationControlComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
