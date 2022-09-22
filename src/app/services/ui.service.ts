import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Film } from "../models/films.model";
import { People } from "../models/people.model";
import { Planet } from "../models/planet.model";
import { Vehicle } from "../models/vehicle.model";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  showingDetails = new BehaviorSubject<boolean>(false);
  card = new BehaviorSubject<'Characters' | 'Films' | 'Planets' | 'Vehicles' | 'NONE'>('NONE');
  filmSelected = new BehaviorSubject<Film>(null);
  characterSelected = new BehaviorSubject<People>(null);
  vehicleSelected = new BehaviorSubject<Vehicle>(null);
  planetSelected = new BehaviorSubject<Planet>(null);

  getShowingDetails() {
    return this.showingDetails.asObservable();
  }

  setShowingDetails(value: boolean) {
    return this.showingDetails.next(value);
  }

  getCard() {
    return this.card.asObservable();
  }

  setCard(value: 'Characters' | 'Films' | 'Planets' | 'Vehicles' | 'NONE') {
    this.card.next(value);
  }

  getFilmSelected() {
    return this.filmSelected.asObservable();
  }

  setFilmSelected(value:Film){
    this.filmSelected.next(value);
  }

  getCharacterSelected() {
    return this.characterSelected.asObservable();
  }

  setCharacterSelected(value:People){
    this.characterSelected.next(value);
  }

  getVehicleSelected() {
    return this.vehicleSelected.asObservable();
  }

  setVehicleSelected(value:Vehicle){
    this.vehicleSelected.next(value);
  }

  getPlanetSelected() {
    return this.planetSelected.asObservable();
  }

  setPlanetSelected(value:Planet){
    this.planetSelected.next(value);
  }
}
