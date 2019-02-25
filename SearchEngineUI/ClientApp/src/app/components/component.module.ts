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
  MatTabsModule,
  MatGridListModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
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
import { MaterialCardComponent } from './materialcard/materialcard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    MatTabsModule,
    HttpClientModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  declarations: [
    SearchComponent,
    ExpansionpanelComponent,
    SidemenuComponent,
    CategoryMenuComponent,
    SubcategoryMenuComponent,
    MaterialCardComponent],

  exports: [SearchComponent,
    ExpansionpanelComponent,
    SidemenuComponent,
    CategoryMenuComponent,
    SubcategoryMenuComponent,
    MaterialCardComponent],
  entryComponents: [CategoryMenuComponent, SubcategoryMenuComponent]
})
export class ComponentModule {

}
