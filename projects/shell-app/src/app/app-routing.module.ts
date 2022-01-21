import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AuthModule } from 'auth-app-lib';


const redirectUnauthorizedToLogin = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  localStorage.setItem('redirectURL', state.url);
  return redirectUnauthorizedTo(['auth/login']);
}; const redirectLoggedInToItems = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'auth',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems },
    loadChildren: () => AuthModule,
  },

  { path: '**', redirectTo: '' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
