import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './view/register/register.component';
import { AuthService } from './shared/services/auth.service';
import { LoginComponent } from './view/login/login.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ForgotPasswordComponent } from './view/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './view/verify-email/verify-email.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { GalleryclicComponent } from './view/galleryclic/galleryclic.component'; 
import { GenerateImageComponent } from './view/generate-image/generate-image.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { WrapperComponent } from './wrapper/wrapper.component';


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
    SpinnerComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
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
