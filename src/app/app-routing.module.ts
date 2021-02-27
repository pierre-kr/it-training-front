import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './pages/formation/formation.component';

const routes: Routes = [
  {path: 'formation', component:  FormationComponent},
  {path: '**', redirectTo: 'formation'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
