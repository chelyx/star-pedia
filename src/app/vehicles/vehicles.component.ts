import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class VehiclesComponent implements OnInit, OnDestroy {
  loading = true;
  nextUrl: string;
  resVehicles: any[][] = [];
  currentPage = 0;
  totalPages = 0;
  vehicleSelected: Vehicle;
  showDetails = false;
  films: Film[] = [];
  people: People[] = [];

  constructor(private readonly swapiService: SwapiService,
    private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllVehicles().subscribe((res: any) =>{
      console.log(res);
      this.resVehicles[0] = res.results;
      this.nextUrl = res.next;
      this.totalPages = Math.ceil(res.count/10);
      this.loading = false;
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
    this.uiService.getVehicleSelected().subscribe(v => {
      if (v) {
        this.selectVehicle(v);
        console.log(v);
      }
    });
  }

  loadMore(){
    console.log(this.nextUrl);
    this.loading = true;
    this.currentPage++;
    this.swapiService.getByUrl(this.nextUrl).subscribe((res: any) => {
      this.nextUrl = res.next;
      this.resVehicles[this.currentPage] = res.results;
      this.loading = false;
    })
  }

  goBack() {
    this.currentPage--;
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

  ngOnDestroy() {
    this.uiService.setVehicleSelected(null);
  }
}
