import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public items: Array<string> = [
    "Java",
    "JavaScript",
    "C",
    "C++",
    "Python",
    "PHP"
  ];

  public searchTerm: string = "";

  public get searchPlaceholder(): string {
    return this.searchTerm ? "" : "Type a Programming Language";
  }
  
  public get searchQuery(): string {
    return this.searchTerm;
  }

  public set searchQuery(updatedString: string) {
    this.searchTerm = updatedString;
  }

}
