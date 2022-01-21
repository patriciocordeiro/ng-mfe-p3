import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UserTestAppRoutingModule } from './user-test-app-routing.module';
import { UserTestAppComponent } from './user-test-app.component';

@NgModule({
  imports: [
    CommonModule,
    UserTestAppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexModule
  ],
  declarations: [UserTestAppComponent]
})
export class UserTestAppModule { }
