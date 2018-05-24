import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { routing } from './app.routing';
import { BodyComponent } from './body/body.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    HeaderComponent,
    LeftnavComponent,
    BodyComponent,
  ],
  imports: [BrowserModule,MatButtonModule, MatToolbarModule,routing],
  exports: [MatButtonModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
