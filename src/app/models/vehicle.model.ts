export class Vehicle {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
  constructor() {}

  setFromJson(json: any) {
    this.name = json.name;
    this.model = json.model;
    this.vehicle_class = json.vehicle_class;
    this.manufacturer = json.manufacturer;
    this.cost_in_credits = json.cost_in_credits;
    this.length = json.length;
    this.crew = json.crew;
    this.passengers = json.passengers;
    this.max_atmosphering_speed = json.max_atmosphering_speed;
    this.cargo_capacity = json.cargo_capacity;
    this.consumables = json.consumables;
    this.films = json.films;
    this.pilots = json.pilots;
    this.url = json.url;
    this.created = json.created;
    this.edited = json.edited;
    return this;
  }
}
