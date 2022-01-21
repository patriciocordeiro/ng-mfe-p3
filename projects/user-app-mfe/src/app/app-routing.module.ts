import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AuthModule } from 'auth-app-lib';

const redirectUnauthorizedToLogin = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  localStorage.setItem('redirectURL', state.url);
  return redirectUnauthorizedTo(['auth/login']);
};
const redirectLoggedInToItems = () => redirectLoggedInTo(['']);



const routes: Routes = [

  {
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    path: '',
    loadChildren: () => import('./user-test-app/user-test-app.module').then((m) => m.UserTestAppModule),
  },
  {
    path: 'auth',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
    loadChildren: () => AuthModule,
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
