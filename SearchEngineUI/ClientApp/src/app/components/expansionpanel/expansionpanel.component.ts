import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  templateUrl: './expansionpanel.component.html',
  selector: 'app-expansionpanel-component',
  styleUrls: ['./expansionpanel.component.css']
})

export class ExpansionpanelComponent implements OnInit {
  testData: JSON;
  menu: Menu;
  test: any;

  ngOnInit(): void {
    this.getJson();
  }
  constructor(private http: HttpClient) {

  }

  getJson() {
    this.http.get('./menu.json')
      .subscribe((data: Menu) => {
        this.menu = data;

        // const item = this.menu.filters.filter(x => x.id === "L10303A4121");
      });
  }
}
export class Menu {
  filters: any[];
}
