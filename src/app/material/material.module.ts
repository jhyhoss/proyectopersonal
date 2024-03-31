import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule,MatGridListModule

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES'},

  ]
})
export class MaterialModule {}
