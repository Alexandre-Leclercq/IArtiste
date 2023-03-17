import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {path: 'login', component: },
  {path: 'register', component: RegisterComponent},
  // {path: 'forogt-password', component:},
  // {path: 'verify-email-adress', component:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
