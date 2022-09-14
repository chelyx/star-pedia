import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'planet', component: PlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
