import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chipinput } from 'src/components/chip-input/chipinput.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProgrammingLanguagesProvider } from 'src/assets/programming-languages.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    Chipinput,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProgrammingLanguagesProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
