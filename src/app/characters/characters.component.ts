import { Component, OnInit } from '@angular/core';
import { People } from '../models/people.model';
import { SwapiService } from '../services/swapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  loading = true;
  characters: People[] = [];
  characterSelected: People;
  showDetails = false;

  constructor(private readonly swapiService: SwapiService,
    private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllPeople().subscribe((res: any) =>{
      this.characters = res.results;
      console.log(res);
      this.loading = false;
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
    this.uiService.getCharacterSelected().subscribe(v => {
      this.characterSelected = v;
      console.log(v);
    });
  }

  selectCharacter(p: People){
    this.characterSelected = p;
    this.uiService.setShowingDetails(true);
    // this.loading = true;
  }

}
