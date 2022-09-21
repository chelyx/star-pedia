import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { SwapiService } from '../services/swapi.service';

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

  constructor(private readonly swapiService: SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getAllFilms().subscribe((res: any) =>{
      this.films = res.results;
      console.log(res);
      this.loading = false;
    })
  }

  selectFilm(f: Film){
    this.filmSelected = f;
    this.showDetails = true;
    // this.loading = true;
  }

}
