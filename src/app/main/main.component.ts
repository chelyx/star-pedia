import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  planetUrl = 'assets/planet.png'
  filmUrl = 'assets/film.png'
  characterUrl = 'assets/character.png'
  vehiclesUrl = 'assets/vehicle.png'

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.swapiService.getPeopleByName('Luke').subscribe(res => {
    //   console.log(res);
    // })
  }

  openCard(selected: string) {
    this.router.navigateByUrl(selected);
  }

}
