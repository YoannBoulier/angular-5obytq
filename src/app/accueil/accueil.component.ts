import {Component, OnInit} from '@angular/core';
import { SessionService } from '../session.service';
import { GeoApiService } from '../geo-api.service';


@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.component.html',
  styleUrls: [ 'accueil.component.css' ],
})
export class AccueilComponent implements OnInit {
  regions:any[] = [];
  departements:any[] = [];
  communes:any[] = [];
  regionNotChoosed = true;
  departementNotChoosed = true;

  constructor(private api : GeoApiService, private session : SessionService) { }

  ngOnInit() {
    this.api.getRegions().subscribe((data: {}) => {
      this.regions = JSON.parse(JSON.stringify(data));
    });
  }

  displayDepartements(region) {
    this.api.getDepartements(region).subscribe((data: {}) => {
      this.departements = JSON.parse(JSON.stringify(data));
    });
    this.regionNotChoosed = false;
  }

  displayCommunes(departement) {
    this.api.getCommunes(departement).subscribe((data: {}) => {
      this.communes = JSON.parse(JSON.stringify(data));
    });
    this.departementNotChoosed = false;
  }
}