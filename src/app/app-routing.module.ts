import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationFormulaireComponent } from './pages/formation-formulaire/formation-formulaire.component';
import { FormationComponent } from './pages/formation/formation.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formation', component: FormationComponent },
  {path:'formulaire/formation', component:FormationFormulaireComponent},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
