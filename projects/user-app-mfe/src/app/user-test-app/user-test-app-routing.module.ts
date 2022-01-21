import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserTestAppComponent } from './user-test-app.component';


const routes: Routes = [
  {
    path: '', component: UserTestAppComponent,
    children: [
      { path: '', loadChildren: () => import('../user/user.module').then(m => m.UserModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTestAppRoutingModule { }
