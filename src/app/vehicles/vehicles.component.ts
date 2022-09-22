import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { People } from '../models/people.model';
import { Vehicle } from '../models/vehicle.model';
import { SwapiService } from '../services/swapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  loading = true;
  vehicles: Vehicle[] = [];
  vehicleSelected: Vehicle;
  showDetails = false;
  films: Film[] = [];
  people: People[] = [];

  constructor(private readonly swapiService: SwapiService,
    private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllVehicles().subscribe((res: any) =>{
      this.vehicles = res.results;
      console.log(res);
      this.loading = false;
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
  }

  selectVehicle(v: Vehicle){
    this.films = [];
    this.people = [];
    this.vehicleSelected = v;
    this.uiService.setShowingDetails(true);
    this.loading = true;
    let urls = this.vehicleSelected.films.concat(this.vehicleSelected.pilots);
    this.swapiService.getMultipleUrls(urls).subscribe((res: any[]) =>{
      res.map(r =>{
        if(r.title) {
          let f = new Film().setFromJson(r);
          this.films.push(f);
        } else if( r.name) {
          let p = new People().setFromJson(r);
          this.people.push(p);
        }
      });
      this.loading = false;
    });
  }

  selectFilm(film: Film) {
    this.uiService.setCard('Films');
    this.uiService.setShowingDetails(true);
    this.uiService.setFilmSelected(film);
  }

  selectPeople(people: People) {
    this.uiService.setCard('Characters');
    this.uiService.setShowingDetails(true);
    this.uiService.setCharacterSelected(people);
  }
}
