import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipsModule } from 'src/components/chips/chips.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProgrammingLanguagesProvider } from 'src/assets/programming-languages.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ChipsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProgrammingLanguagesProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
