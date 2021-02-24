import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProgrammingLanguagesProvider } from 'src/assets/programming-languages.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public formControl: FormControl;
  public items: Array<string>;

  public selectedItems: Array<string> = [];

  public constructor(
    fb: FormBuilder,
    private httpClient: HttpClient,
    private dataProvider: ProgrammingLanguagesProvider
  ) {
    // get items from data provider
    // this.items = this.dataProvider.programmingLanguages;

    this.formControl = new FormControl([]);
  }

  public ngOnInit(): void {
    // get items from json file
    this.httpClient
      .get<any>('assets/programming-languages.json')
      .subscribe((data) => (this.items = data.languages));
  }

  public setSelectedItems(selectedItems: Array<string>): void {
    this.selectedItems = selectedItems;
    // current output value of
    // items

    console.log(this.selectedItems.join(', '));
  }
}
