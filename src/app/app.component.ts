import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ProgrammingLanguagesProvider } from 'src/assets/programming-languages.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  public items: Array<string>;

  public constructor(
    fb: FormBuilder, private httpClient: HttpClient, private dataProvider: ProgrammingLanguagesProvider,) {
      // get items from data provider
      this.items = this.dataProvider.programmingLanguages;
      
      this.form = fb.group({
        chips: fb.array([])
      });

    }

    public ngOnInit(): void {
      // get items from json file

      // this.httpClient
      //   .get<any>("assets/programming-languages.json")
      //   .subscribe(data => (this.items = data.languages));
    }
}
