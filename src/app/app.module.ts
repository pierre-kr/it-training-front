import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import {DividerModule} from 'primeng/divider';


import { FormationComponent } from './pages/formation/formation.component';
import { DescriptionFormationComponent } from './components/formations/description-formation/description-formation.component';
import { SessionsOfFormationComponent } from './components/formations/sessions-of-formation/sessions-of-formation.component';
import { ImportantInformationsFormationComponent } from './components/formations/important-informations-formation/important-informations-formation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormationFormulaireComponent } from './pages/formation-formulaire/formation-formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    FormationComponent,
    DescriptionFormationComponent,
    SessionsOfFormationComponent,
    ImportantInformationsFormationComponent,
    PageNotFoundComponent,
    FormationFormulaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
