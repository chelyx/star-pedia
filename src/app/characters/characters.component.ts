import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { People } from '../models/people.model';
import { Planet } from '../models/planet.model';
import { Vehicle } from '../models/vehicle.model';
import { SwapiService } from '../services/swapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  loading = true;
  nextUrl: string;
  resPeople: any[][] = [];
  currentPage = 0;
  totalPages = 0;
  characterSelected: People;
  showDetails = false;
  films: Film[] = [];
  vehicles: Vehicle[] = [];

  constructor(private readonly swapiService: SwapiService,
    private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllPeople().subscribe((res: any) =>{
      console.log(res);
      this.resPeople[0] = res.results;
      this.nextUrl = res.next;
      this.totalPages = Math.ceil(res.count/10);
      this.loading = false;
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
    this.uiService.getCharacterSelected().subscribe(v => {
      if (v) {
        this.selectCharacter(v);
        console.log(v);
      }
    });
  }

  selectCharacter(p: People){
    this.films = [];
    this.vehicles = [];
    this.characterSelected = p;
    this.uiService.setShowingDetails(true);
    this.loading = true;
    let urls = this.characterSelected.vehicles.concat(this.characterSelected.films);
    this.swapiService.getMultipleUrls(urls).subscribe((res: any[]) =>{
      res.map(r => {
        if(r.model) {
          let v = new Vehicle().setFromJson(r);
          this.vehicles.push(v);
        } else if(r.title) {
          let p = new Film().setFromJson(r);
          this.films.push(p);
        }
      });
      this.loading = false;
    });
  }

  loadMore(){
    console.log(this.nextUrl);
    this.loading = true;
    this.currentPage++;
    this.swapiService.getByUrl(this.nextUrl).subscribe((res: any) => {
      this.nextUrl = res.next;
      this.resPeople[this.currentPage] = res.results;
      this.loading = false;
    })
  }

  goBack() {
    this.currentPage--;
  }

  selectFilm(film: Film) {
    this.uiService.setCard('Films');
    this.uiService.setShowingDetails(true);
    this.uiService.setFilmSelected(film);
  }

  selectVehicle(vehicle: Vehicle) {
    this.uiService.setCard('Vehicles');
    this.uiService.setShowingDetails(true);
    this.uiService.setVehicleSelected(vehicle);
  }
}
