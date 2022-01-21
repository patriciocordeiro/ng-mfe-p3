import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestAppComponent } from './test-app.component';

const routes: Routes = [{ path: '', component: TestAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAppRoutingModule { }
