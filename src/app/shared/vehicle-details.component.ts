import { Component, Input, OnInit } from "@angular/core";
import { Vehicle } from "../models/vehicle.model";

@Component({
  selector: 'app-vehicle-details',
  template: `
  <div class="details">
    <span id="name">{{vehicle.name}}</span>
    <span>Model: {{vehicle.model}}</span>
    <span>Class: {{vehicle.vehicle_class}}</span>
    <span>manufacturer: {{vehicle.manufacturer}}</span>
    <span>Cost in credits: {{vehicle.cost_in_credits}}</span>
    <span>Length: {{vehicle.length}}</span>
    <span>Crew: {{vehicle.crew}}</span>
    <span>passengers: {{vehicle.passengers}}</span>
    <span>Max atmosphering speed: {{vehicle.max_atmosphering_speed}}</span>
    <span>Cargo capacity: {{vehicle.cargo_capacity}} </span>
    <span>Consumables: {{vehicle.consumables}}</span>
  </div>
  `,
})
export class VehicleDetailsComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor() { }

  ngOnInit(): void {}
}
