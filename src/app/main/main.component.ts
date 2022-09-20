import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planet } from '../models/planet.model';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cardSelected: 'CH' | 'FI' | 'PL' | 'VE' | 'NONE' = 'NONE';
  constructor(private readonly swapiService: SwapiService) { }

  ngOnInit(): void {
  }

  openCard(selected: 'CH' | 'FI' | 'PL' | 'VE') {
    this.cardSelected = selected;
  }

}
