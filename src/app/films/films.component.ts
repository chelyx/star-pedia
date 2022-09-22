import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { People } from '../models/people.model';
import { Planet } from '../models/planet.model';
import { Vehicle } from '../models/vehicle.model';
import { SwapiService } from '../services/swapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  loading = true;
  films: Film[] = [];
  filmSelected: Film;
  showDetails = false;
  planets: Planet[] = [];
  residents: People[] = [];
  vehicles: Vehicle[] = [];

  constructor(private readonly swapiService: SwapiService,
    private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllFilms().subscribe((res: any) =>{
      this.films = res.results;
      console.log(res);
      this.loading = false;
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
    this.uiService.getFilmSelected().subscribe(v => {
      if (v) {
      this.selectFilm(v);
      console.log(v);
      }
    });
  }

  selectFilm(f: Film){
    this.vehicles = [];
    this.planets = [];
    this.residents = [];
    this.filmSelected = f;
    this.uiService.setShowingDetails(true);
    this.loading = true;
    let urls = this.filmSelected.vehicles.concat(this.filmSelected.planets).concat(this.filmSelected.characters);
    this.swapiService.getMultipleUrls(urls).subscribe((res: any[]) =>{
      res.map(r => {
        if(r.model) {
          let v = new Vehicle().setFromJson(r);
          this.vehicles.push(v);
        } else if(r.diameter) {
          let p = new Planet().setFromJson(r);
          this.planets.push(p);
        } else if(r.birth_year) {
          let p = new People().setFromJson(r);
          this.residents.push(p);
        }
      });
      this.loading = false;
    });
  }

  selectPeople(people: People) {
    this.uiService.setCard('Characters');
    this.uiService.setShowingDetails(true);
    this.uiService.setCharacterSelected(people);
  }

  selectVehicle(vehicle: Vehicle) {
    this.uiService.setCard('Vehicles');
    this.uiService.setShowingDetails(true);
    this.uiService.setVehicleSelected(vehicle);
  }

  selectPlanet(planet: Planet) {
    this.uiService.setCard('Planets');
    this.uiService.setShowingDetails(true);
    this.uiService.setPlanetSelected(planet);
  }
}
