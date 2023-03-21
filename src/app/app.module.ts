import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './view/register/register.component';
import { AuthService } from './shared/services/auth.service';
import { LoginComponent } from './view/login/login.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ForgotPasswordComponent } from './view/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './view/verify-email/verify-email.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { GalleryclicComponent } from './view/galleryclic/galleryclic.component'; 
import { TestComponent } from './test/test.component';
import { GenerateImageComponent } from './view/generate-image/generate-image.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    GalleryComponent,
    GalleryclicComponent,
    GenerateImageComponent,
    NavbarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AuthService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
