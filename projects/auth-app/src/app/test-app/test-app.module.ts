import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { TestAppRoutingModule } from './test-app-routing.module';
import { TestAppComponent } from './test-app.component';

@NgModule({
  imports: [
    CommonModule,
    TestAppRoutingModule,
    MatButtonModule
  ],
  declarations: [TestAppComponent]
})
export class TestAppModule { }
