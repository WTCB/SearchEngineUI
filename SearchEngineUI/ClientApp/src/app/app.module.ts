import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { ComponentModule } from './components/component.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentModule,
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
  
    
  ],
  exports: [
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
