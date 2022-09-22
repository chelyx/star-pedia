import { Component, Input, OnInit } from "@angular/core";
import { People } from "../models/people.model";

@Component({
  selector: 'app-people-details',
  template: `
  <div class="details">
    <span id="name">{{people.name}}</span>
    <span>Birth year: {{people.birth_year}}</span>
    <span>Eye color: {{people.eye_color}}</span>
    <span>Gender: {{people.gender}}</span>
    <span>Hair Color: {{people.hair_color}}</span>
    <span>Height: {{people.height}}</span>
    <span>Mass: {{people.mass}}</span>
    <span>Skin Color: {{people.skin_color}}</span>
  </div>
  `,
})
export class PeopleDetailsComponent implements OnInit {
  @Input() people: People;

  constructor() { }

  ngOnInit(): void {}
}
