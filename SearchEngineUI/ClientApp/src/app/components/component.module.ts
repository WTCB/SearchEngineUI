import { NgModule } from '@angular/core';

import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatSliderModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatTabsModule

  
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CategoryMenuComponent } from './categorymenu/categorymenu.component';
import { FormsModule } from '@angular/forms';
import { SubcategoryMenuComponent } from './subcategorymenu/subcategorymenu.component';
import { FormBuilder, FormGroup } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTabsModule
   
  ],
  declarations: [SearchComponent, ExpansionpanelComponent, SidemenuComponent, CategoryMenuComponent, SubcategoryMenuComponent],
  exports: [SearchComponent, ExpansionpanelComponent, SidemenuComponent, CategoryMenuComponent, SubcategoryMenuComponent],
  entryComponents: [CategoryMenuComponent, SubcategoryMenuComponent]
})
export class ComponentModule {

}
