import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  planetUrl = '../../assets/planet.png'

  constructor(private readonly swapiService: SwapiService) { }

  ngOnInit(): void {
    // this.swapiService.getPeopleByName('Luke').subscribe(res => {
    //   console.log(res);
    // })
  }

}
