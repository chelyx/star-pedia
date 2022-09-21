import { Component, Input, OnInit } from "@angular/core";
import { Planet } from "../models/planet.model";
@Component({
  selector: 'app-planet-details',
  template: `
  <div class="details">
    <span id="name">{{planet.name}}</span>
    <span>Diameter: {{planet.diameter}}</span>
    <span>Rotation period: {{planet.rotation_period}}</span>
    <span>Gravity: {{planet.gravity}}</span>
    <span>Population: {{planet.population}}</span>
    <span>Climate: {{planet.climate}}</span>
    <span>Terrain: {{planet.terrain}}</span>
    <span>Surface Water: {{planet.surface_water}}</span>
  </div>
  `,
})
export class PlanetDetailsComponent implements OnInit {
  @Input() planet: Planet;

  constructor() { }

  ngOnInit(): void {}
}
