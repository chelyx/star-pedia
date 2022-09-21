import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { SwapiService } from '../services/swapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  loading = true;
  films: Film[] = [];
  filmSelected: Film;
  showDetails = false;

  constructor(private readonly swapiService: SwapiService,
    private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllFilms().subscribe((res: any) =>{
      this.films = res.results;
      console.log(res);
      this.loading = false;
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
    this.uiService.getFilmSelected().subscribe(v => {
      this.filmSelected = v;
      console.log(v);
    });
  }

  selectFilm(f: Film){
    this.filmSelected = f;
    this.uiService.setShowingDetails(true);
    // this.loading = true;
  }

}
