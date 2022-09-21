export class People {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;

  constructor(){}

  setFromJson(json: any) {
    this.name = json.name;
    this.birth_year = json.birth_year;
    this.eye_color = json.eye_color;
    this.gender = json.gender;
    this.hair_color = json.hair_color;
    this.height = json.height;
    this.mass = json.mass;
    this.skin_color = json.skin_color;
    this.homeworld = json.homeworld;
    this.films = json.films;
    this.species = json.species;
    this.starships = json.starships;
    this.vehicles = json.vehicles;
    this.url = json.url;
    this.created = json.created;
    this.edited = json.edited;
    return this;
  }
}
