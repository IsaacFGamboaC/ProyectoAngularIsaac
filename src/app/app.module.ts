import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from 'components/about/about.component';
import { HomeComponent } from 'components/home/home.component';
import { NavbarComponent } from 'components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, AboutComponent, HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
