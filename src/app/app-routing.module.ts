import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationFormulaireComponent } from './components/dashboard/formation-formulaire/formation-formulaire.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { EvaluationSessionComponent } from './formulaires/evaluation-session/evaluation-session.component';
import { InscriptionSessionComponent } from './formulaires/inscription-session/inscription-session.component';
import { FormationComponent } from './pages/formation/formation.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ChartsComponent } from './components/charts/charts.component';
import { FormateurFormulaireComponent } from './components/dashboard/formateur-formulaire/formateur-formulaire.component';
import { SessionFormulaireComponent } from './components/dashboard/session-formulaire/session-formulaire.component';
import { ResponsableComponent } from './components/dashboard/responsable/responsable.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormateurComponent } from './components/dashboard/formateur/formateur.component';
import { SessionComponent } from './components/dashboard/session/session.component';
import { ResponsableFormulaireComponent } from './components/dashboard/responsable-formulaire/responsable-formulaire.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'catalogue/formation', component: FormationComponent},
  { path: 'inscription/session', component: InscriptionSessionComponent },
  {path:'formulaire/formation', component:FormationFormulaireComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuardService],children:[
    {path: 'chart',component:ChartsComponent},
    {path: 'formation',component:FormationFormulaireComponent},
    {path: 'formateur',component:FormateurFormulaireComponent},
    {path: 'formateur-liste',component:FormateurComponent},
    {path: 'session',component:SessionFormulaireComponent},
    {path: 'session-liste',component:SessionComponent},
    {path: 'responsable',component:ResponsableFormulaireComponent},
    {path: 'responsable-liste',component:ResponsableComponent},
  ]},
  
  {path: '404', component: PageNotFoundComponent },
  {path: '**', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
