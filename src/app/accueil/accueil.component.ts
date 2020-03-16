import {Component, OnInit} from '@angular/core';
import { SessionService } from '../session.service';
import { GeoApiService } from '../geo-api.service';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.component.html',
  styleUrls: [ 'accueil.component.css' ],
})
export class AccueilComponent implements OnInit {
  regions:any[] = [];
  departements:any[] = [];
  communes:any[] = [];
  sports:any[] = [];
  regionNotChoosed = true;
  departementNotChoosed = true;

  constructor(private api : GeoApiService, private rest : RestApiService, private session : SessionService) { }

  ngOnInit() {
    this.api.getRegions().subscribe((data: {}) => {
      this.regions = JSON.parse(JSON.stringify(data));
    });
    this.sports = this.rest.getSports(); // A modifier une fois l'appel à l'API REST fonctionnel
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

  saveLocation(region, departement, commune) {

    // Appel à l'API REST pour sauvegarde la localisation

  }

  isConnected(){
    return this.session.isConnected;
  }
} 