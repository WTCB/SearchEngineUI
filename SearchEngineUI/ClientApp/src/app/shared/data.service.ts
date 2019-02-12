import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DummyData } from 'src/testData';

export class DataService {
  dummyList: DummyData[];

  constructor(private http: HttpClient) { }
  getDummyData() {
    this.http.get('http://localhost:3000/_embedded').subscribe(res => this.dummyList = res as DummyData[]);
  }
  onEnter(value: string) { }
}
