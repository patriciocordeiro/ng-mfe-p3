import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    AuthSignupComponent,
    AuthLoginComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule

  ]
})
export class AuthModule { }
