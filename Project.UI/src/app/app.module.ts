import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {PageNotFoundComponent} from './error/page-not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }