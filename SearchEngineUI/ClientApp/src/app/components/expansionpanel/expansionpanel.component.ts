import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  templateUrl: './expansionpanel.component.html',
  selector: 'app-expansionpanel-component',
  styleUrls: ['./expansionpanel.component.scss']
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
    let headers = new HttpHeaders();
    headers.append('Accept-Charset', 'utf-8');
    //console.log(headers.get('Accept-Charset'));
    this.http.get('./menu1.json', { headers: headers})
      .subscribe((data: Menu) => {
        this.menu = data;

        // const item = this.menu.filters.filter(x => x.id === "L10303A4121");
      });
  }
}
export class Menu {
  filters: any[];
}
