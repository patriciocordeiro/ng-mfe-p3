import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';


const redirectUnauthorizedToLogin = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  localStorage.setItem('redirectURL', state.url);
  return redirectUnauthorizedTo(['auth/login']);
}; const redirectLoggedInToItems = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => import('./test-app/test-app.module').then(m => m.TestAppModule),
  },
  {
    path: 'auth',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems },
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  { path: '**', redirectTo: '' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
