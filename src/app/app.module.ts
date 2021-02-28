import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import {DividerModule} from 'primeng/divider';


import { FormationComponent } from './pages/formation/formation.component';
import { DescriptionFormationComponent } from './components/formations/description-formation/description-formation.component';
import { SessionsOfFormationComponent } from './components/formations/sessions-of-formation/sessions-of-formation.component';
import { ImportantInformationsFormationComponent } from './components/formations/important-informations-formation/important-informations-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    DescriptionFormationComponent,
    SessionsOfFormationComponent,
    ImportantInformationsFormationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
