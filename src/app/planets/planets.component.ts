import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { People } from '../models/people.model';
import { Planet } from '../models/planet.model';
import { SwapiService } from '../services/swapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  nextUrl: string;
  showDetails = false;
  loading = true;
  resPlanets: any[][] = [];
  currentPage = 0;
  totalPages = 0;
  planetSelected: Planet;
  films: Film[] = [];
  residents: People[] = [];
  constructor(private readonly swapiService: SwapiService,
      private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllPlanets().subscribe((res: any) =>{
      console.log(res);
      this.nextUrl = res.next;
      this.resPlanets[0] = res.results;
      this.loading = false;
      this.totalPages = Math.ceil(res.count/10);
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
    this.uiService.getPlanetSelected().subscribe(v => {
      if (v) {
        this.selectPlanet(v);
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
      this.resPlanets[this.currentPage] = res.results;
      this.loading = false;
    })
  }

  goBack() {
    this.currentPage--;
  }

  selectPlanet(planet: Planet) {
    this.loading = true;
    this.films = [];
    this.residents = [];
    this.planetSelected = planet;
    this.uiService.setShowingDetails(true);
    let urls = this.planetSelected.films.concat(this.planetSelected.residents);
    this.swapiService.getMultipleUrls(urls).subscribe((res: any[]) =>{
      res.map(r =>{
        if(r.title) {
          let f = new Film().setFromJson(r);
          this.films.push(f);
        } else if( r.name) {
          let p = new People().setFromJson(r);
          this.residents.push(p);
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
