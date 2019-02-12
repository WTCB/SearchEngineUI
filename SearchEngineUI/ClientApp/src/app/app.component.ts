import { Component, Inject, OnInit } from '@angular/core';
import { DummyData } from 'src/testData';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CategoryMenuComponent } from './components/categorymenu/categorymenu.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
  dummyList: DummyData[];
  items: any[];
  searchText: string;

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getDummyData() {
    this.http.get('http://localhost:3000/_embedded').subscribe(res => this.dummyList = res as DummyData[]);
  }
  onEnter(value: string) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(CategoryMenuComponent, dialogConfig);
  }

  ngOnInit() {
  }
}
