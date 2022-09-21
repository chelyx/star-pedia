import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
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

  constructor(private readonly swapiService: SwapiService,private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllPlanets().subscribe((res: any) =>{
      this.planets = res.results;
      console.log(res);
      this.loading = false;
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
  }

  selectPlanet(planet: Planet) {
    this.planetSelected = planet;
    this.uiService.setShowingDetails(true);
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
