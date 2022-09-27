import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planet } from '../models/planet.model';
import { SwapiService } from '../services/swapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cardSelected: 'Characters' | 'Films' | 'Planets' | 'Vehicles' | 'NONE' = 'NONE';
  constructor(private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.getCard().subscribe(c => this.cardSelected = c)
  }

  openCard(selected: 'Characters' | 'Films' | 'Planets' | 'Vehicles' | 'NONE') {
    this.uiService.setCard(selected);
    this.uiService.setShowingDetails(false);
  }

  onShowDetails(value: boolean) {
    this.uiService.setShowingDetails(value);
  }

}
