import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { LoginPassComponent } from '../app/pages/login-pass/login-pass.component';
import { UserContainerComponent } from './pages/user-container/user-container.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { AuthGuard  } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-pass', component: LoginPassComponent },
  {
    path: 'user',
    component: UserContainerComponent,
    canActivate: [AuthGuard ],
    children: [
      { path: '', component: PagosComponent },
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
