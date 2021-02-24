import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChipsComponent } from './chips.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ChipsComponent
  ],
  exports: [ChipsComponent]
})
export class ChipsModule { }
