import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Film } from '../models/films.model';
import { People } from '../models/people.model';
import { Planet } from '../models/planet.model';
import { SwapiService } from '../services/swapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  showDetails = false;
  loading = true;
  planets: Planet[] = [];
  planetSelected: Planet;
  films: Film[] = [];
  residents: People[] = [];
  constructor(private readonly swapiService: SwapiService,
      private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllPlanets().subscribe((res: any) =>{
      this.planets = res.results;
      console.log(res);
      this.loading = false;
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
  }

  selectPlanet(planet: Planet) {
    this.loading = true;
    this.films = [];
    this.residents = [];
    this.planetSelected = planet;
    this.uiService.setShowingDetails(true);
    let urls = this.planetSelected.films.concat(this.planetSelected.residents);
    this.swapiService.getMultipleUrls(urls).subscribe((res: any[]) =>{
      res.map(r =>{
        if(r.title) {
          let f = new Film().setFromJson(r);
          this.films.push(f);
        } else if( r.name) {
          let p = new People().setFromJson(r);
          this.residents.push(p);
        }
      });
      this.loading = false;
    });
  }

  selectFilm(film: Film) {
    this.uiService.setCard('Films');
    this.uiService.setShowingDetails(true);
    this.uiService.setFilmSelected(film);
  }

  selectPeople(people: People) {
    this.uiService.setCard('Characters');
    this.uiService.setShowingDetails(true);
    this.uiService.setCharacterSelected(people);
  }

}
