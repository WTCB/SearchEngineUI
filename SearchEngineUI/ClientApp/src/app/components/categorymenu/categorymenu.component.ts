import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HttpClient } from '@angular/common/http';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-categorymenu-component',
  templateUrl: 'categorymenu.component.html'
})


export class CategoryMenuComponent {
  

  constructor(private http: HttpClient, private dialog: MatDialog) { }
  
  
  

  
}
