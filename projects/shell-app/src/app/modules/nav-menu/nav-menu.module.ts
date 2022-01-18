import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NavMenuComponent } from './nav-menu.component';



@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    FlexModule,
    MatButtonModule
  ],
  exports:[NavMenuComponent]
})
export class NavMenuModule { }
