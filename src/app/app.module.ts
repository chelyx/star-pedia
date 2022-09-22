import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlanetsComponent } from './planets/planets.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FilmsComponent } from './films/films.component';
import { CharactersComponent } from './characters/characters.component';
import { VehicleDetailsComponent } from './shared/vehicle-details.component';
import { PlanetDetailsComponent } from './shared/planet-details.component';
import { FilmDetailsComponent } from './shared/films-details.component';
import { PeopleDetailsComponent } from './shared/people-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlanetsComponent,
    VehiclesComponent,
    FilmsComponent,
    CharactersComponent,
    VehicleDetailsComponent,
    PlanetDetailsComponent,
    FilmDetailsComponent,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
