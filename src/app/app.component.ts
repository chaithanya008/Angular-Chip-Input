import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup;

  public constructor(
    fb: FormBuilder) {
      this.form = fb.group({
        chips: fb.array([])
      });
    }

}
