import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { InscriptionSessionComponent } from './formulaires/inscription-session/inscription-session.component';
import { FormationComponent } from './pages/formation/formation.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'catalogue/formation', component: FormationComponent},
  {path: 'inscription', component: InscriptionSessionComponent},
  {path: '**', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
