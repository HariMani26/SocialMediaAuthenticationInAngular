import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {SocialLoginModule, AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider,} from "angular-6-social-login";
let config = new AuthServiceConfig(
  [
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("Your Id")
    },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("Your Id")
    }
  ]);
  export function getAuthServiceConfigs() {
    return config;
  }
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
