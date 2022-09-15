import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { Planet } from '../models/planet.model';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  loading = true;
  planets: Planet[] = [];
  planetSelected: Planet;
  showDetails = false;

  constructor(private readonly swapiService: SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getAllPlanets().subscribe((res: any) =>{
      this.planets = res.results;
      console.log(res);
      this.loading = false;
    })
  }

  selectPlanet(planet: Planet) {
    this.planetSelected = planet;
    this.showDetails = true;
    this.loading = true;
    let films: Film[] = [];
    this.planetSelected.films.forEach(fUrl => {
      this.swapiService.getByUrl(fUrl).subscribe((res:any) =>{
        films.push(res);
      });
      console.log(films);
      this.loading = false;
    });
  }

}
