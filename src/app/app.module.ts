import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VariablesComponent } from './components/variables/variables.component';
import { AtributosComponent } from './components/atributos/atributos.component';
import { EstructuralesComponent } from './components/estructurales/estructurales.component';
import { HttpComponent } from './components/http/http.component';

import {DinosauriosService} from './services/dinosaurios.service'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    AtributosComponent,
    EstructuralesComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DinosauriosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
