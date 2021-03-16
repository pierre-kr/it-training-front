import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';


import { TableModule } from 'primeng/table';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import {ListboxModule} from 'primeng/listbox';



import { OrderListModule } from 'primeng/orderlist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CascadeSelectModule } from 'primeng/cascadeselect';


import { FormationComponent } from './pages/formation/formation.component';
import { DescriptionFormationComponent } from './components/formations/description-formation/description-formation.component';
import { SessionsOfFormationComponent } from './components/formations/sessions-of-formation/sessions-of-formation.component';
import { ImportantInformationsFormationComponent } from './components/formations/important-informations-formation/important-informations-formation.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ThemeFormationsComponent } from './components/theme-formations/theme-formations.component';
import { InscriptionSessionComponent } from './formulaires/inscription-session/inscription-session.component';
import { EvaluationSessionComponent } from './formulaires/evaluation-session/evaluation-session.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormationFormulaireComponent } from './components/dashboard/formation-formulaire/formation-formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormateurFormulaireComponent } from './components/dashboard/formateur-formulaire/formateur-formulaire.component';
import { SessionFormulaireComponent } from './components/dashboard/session-formulaire/session-formulaire.component';
import { ThemeFormulaireComponent } from './components/dashboard/theme-formulaire/theme-formulaire.component';
import { ResponsableFormulaireComponent } from './components/dashboard/responsable-formulaire/responsable-formulaire.component';
import { ResponsableComponent } from './components/dashboard/responsable/responsable.component';
import { FormateurService } from './services/formateur.service';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormateurComponent } from './components/dashboard/formateur/formateur.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/charts-group/line-chart/line-chart.component';
import { BarChartComponent } from './components/charts-group/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/charts-group/doughnut-chart/doughnut-chart.component';
import { SessionComponent } from './components/dashboard/session/session.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';



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
    FormationFormulaireComponent,
    CatalogueComponent,
    ThemeFormationsComponent,
    InscriptionSessionComponent,
    EvaluationSessionComponent,
    PageNotFoundComponent,
    FormateurFormulaireComponent,
    SessionFormulaireComponent,
    ThemeFormulaireComponent,
    ResponsableFormulaireComponent,
    ResponsableComponent,
    FormateurComponent,
    LoginComponent,
    DashboardComponent,
    SideBarComponent,
    ChartsComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    SessionComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    RadioButtonModule,
    ToastModule,
    DividerModule,
    DropdownModule,
    OrderListModule,
    CascadeSelectModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    InputTextModule,
    ProgressBarModule,
    ListboxModule
  ],
  providers: [FormateurService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
