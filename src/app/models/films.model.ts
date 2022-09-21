export class Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;

  constructor(){}

  setFromJson(json: any) {
    this.title = json.title;
    this.episode_id = json.episode_id;
    this.opening_crawl = json.opening_crawl;
    this.director = json.director;
    this.producer = json.producer;
    this.release_date = json.release_date;
    this.species = json.species;
    this.starships = json.starships;
    this.vehicles = json.vehicles;
    this.characters = json.characters;
    this.planets = json.planets;
    this.url = json.url;
    this.created = json.created;
    this.edited = json.edited;
    return this;
  }
}
