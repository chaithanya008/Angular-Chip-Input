import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProgrammingLanguagesProvider } from 'src/assets/programming-languages.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  public items: Array<string>;

  public selectedItems: Array<string> = [];

  public constructor(
    fb: FormBuilder,
    private httpClient: HttpClient,
    private dataProvider: ProgrammingLanguagesProvider
  ) {
    // get items from data provider
    this.items = this.dataProvider.programmingLanguages;

    this.form = fb.group({
      chips: fb.array([]),
    });
  }

  public ngOnInit(): void {
    // get items from json file
    // this.httpClient
    //   .get<any>("assets/programming-languages.json")
    //   .subscribe(data => (this.items = data.languages));
  }

  public get chips(): FormArray {
    return this.form.get('chips') as FormArray;
  }

  public setSelectedItems(selectedItems: Array<string>): void {
    this.selectedItems = selectedItems;
    // current output value of selected items
    console.log(this.selectedItems.join(', '));
  }
}
