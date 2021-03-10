import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationFormulaireComponent } from './pages/formation-formulaire/formation-formulaire.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { InscriptionSessionComponent } from './formulaires/inscription-session/inscription-session.component';
import { FormationComponent } from './pages/formation/formation.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'catalogue/formation', component: FormationComponent},
  {path: 'inscription', component: InscriptionSessionComponent},
  {path:'formulaire/formation', component:FormationFormulaireComponent},
  {path: '404', component: PageNotFoundComponent },
  {path: '**', redirectTo: 'home'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
