import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';



const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [{path: 'test', loadChildren: ()=> import('../../../assets/user-app-mfe-lib.umd' as any).then(m=> m.UserModule)}]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
