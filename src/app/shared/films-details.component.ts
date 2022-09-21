import { Component, Input, OnInit } from "@angular/core";
import { Film } from "../models/films.model";

@Component({
  selector: 'app-film-details',
  template: `
  <div class="details">
  <span id="name">{{film.title}}</span>
    <span>Episodio {{film.episode_id}}</span>
    <span>Opening Crawl: {{film.opening_crawl}}</span>
    <span>Director: {{film.director}}</span>
    <span>Producer: {{film.producer}}</span>
    <span>Release date: {{film.release_date}}</span>
  </div>
  `,
})
export class FilmDetailsComponent implements OnInit {
  @Input() film: Film;

  constructor() { }

  ngOnInit(): void {}
}
