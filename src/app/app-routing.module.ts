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

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'catalogue/formation', component: FormationComponent},
  { path: 'inscription/session', component: InscriptionSessionComponent },
  {path:'formulaire/formation', component:FormationFormulaireComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuardService],children:[
    {path: 'chart',component:ChartsComponent}
  ]},
  
  {path: '404', component: PageNotFoundComponent },
  {path: '**', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
