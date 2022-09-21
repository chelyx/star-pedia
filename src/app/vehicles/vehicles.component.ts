import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { SwapiService } from '../services/swapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  loading = true;
  vehicles: Vehicle[] = [];
  vehicleSelected: Vehicle;
  showDetails = false;

  constructor(private readonly swapiService: SwapiService,
    private readonly uiService: UiService) { }

  ngOnInit(): void {
    this.swapiService.getAllVehicles().subscribe((res: any) =>{
      this.vehicles = res.results;
      console.log(res);
      this.loading = false;
    });
    this.uiService.getShowingDetails().subscribe(v => this.showDetails = v);
  }

  selectVehicle(v: Vehicle){
    this.vehicleSelected = v;
    this.uiService.setShowingDetails(true);
    // this.loading = true;
  }

}
