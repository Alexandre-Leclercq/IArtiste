import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { ForgotPasswordComponent } from './view/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './view/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { GalleryclicComponent } from './view/galleryclic/galleryclic.component';
import { TestComponent } from './test/test.component';
import { GenerateImageComponent } from './view/generate-image/generate-image.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'galleryclic', component: GalleryclicComponent},
  {path: 'generate-image', component: GenerateImageComponent, canActivate: [AuthGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'verify-email-adress', component: VerifyEmailComponent },
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
