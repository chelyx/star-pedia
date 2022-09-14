import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet.model';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  planetSelected: Planet;
  showDetails = false;

  constructor(private readonly swapiService: SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getAllPlanets().subscribe((res: any) =>{
      this.planets = res.results;
      console.log(res);
    })
  }

  selectPlanet(planet: Planet) {
    this.planetSelected = planet;
    this.showDetails = true;
  }

}
