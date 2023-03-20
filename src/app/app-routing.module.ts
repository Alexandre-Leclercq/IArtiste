import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'generate-image', component: RegisterComponent},
  // {path: 'forgot-password', component:},
  // {path: 'verify-email-adress', component:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
