import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  url  = 'https://swapi.dev/api/';

  constructor(private httpClient: HttpClient) { }

  getAllPeople() {
    return this.httpClient.get(this.url + '/people/');
  }

  getPeopleByName(name: string) {
    return this.httpClient.get(this.url + '/people/?search='+ name);
  }

  getAllFilms() {
    return this.httpClient.get(this.url + '/films/');
  }

  getFilmsByTitle(title: string) {
    return this.httpClient.get(this.url + '/films/?search='+ title);
  }

  getAllStarships() {
    return this.httpClient.get(this.url + '/starships/');
  }

  getStarshipsByName(name: string) {
    return this.httpClient.get(this.url + '/starships/?search='+ name);
  }

  getAllVehicles() {
    return this.httpClient.get(this.url + '/vehicles/');
  }

  getVehiclesByName(name: string) {
    return this.httpClient.get(this.url + '/vehicles/?search='+ name);
  }

  getAllSpecies() {
    return this.httpClient.get(this.url + '/species/');
  }

  getSpeciesByName(name: string) {
    return this.httpClient.get(this.url + '/species/?search='+ name);
  }

  getAllPlanets() {
    return this.httpClient.get(this.url + '/planets/');
  }

  getPlanetsByName(name: string) {
    return this.httpClient.get(this.url + '/planets/?search='+ name);
  }

  getByUrl(url:string) {
    return this.httpClient.get(url);
  }

}
