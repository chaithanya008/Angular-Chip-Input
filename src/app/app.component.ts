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

  public searchText: string = "";
  public searchResults: Array<string> = [];

  public get searchPlaceholder(): string {
    return this.searchText ? "" : "Type a Programming Language";
  }
  
  public get searchQuery(): string {
    return this.searchText;
  }

  public set searchQuery(updatedString: string) {
    this.searchText = updatedString;
    if (this.searchText.length > 0) {
      this.querySearchResults();
    } else {
      this.searchResults = [];
    }
  }

  private querySearchResults(): void {
    this.searchResults = this.items.filter(
      (x: string) =>
        x.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
  }

}
