import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  templateUrl: './materialcard.component.html',
  selector: 'app-materialcard-component'
})

export class MaterialCardComponent implements OnInit {

  product: Product;

  ngOnInit(): void {
    this.getJson();
  }
  constructor(private http: HttpClient) { }

  getJson() {
    let headers = new HttpHeaders();
    headers.append('Accept-Charset', 'utf-8');
    this.http.get('./product.json', { headers: headers })
      .subscribe((data: Product) => {
        this.product = data;
      })
  }
}


export class Product {
  products: any[];
}

