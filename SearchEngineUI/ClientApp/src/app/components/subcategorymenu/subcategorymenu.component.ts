import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-subcategorymenu-component',
  templateUrl: 'subcategorymenu.component.html'
})


export class SubcategoryMenuComponent {
  

  constructor() { }
}
