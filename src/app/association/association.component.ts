import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
  sports:any[] = [];
  locations:any[] = [];

  constructor(private rest : RestApiService, private session : SessionService) { }

  ngOnInit() {
    // A modifier une fois l'appel à l'API REST fonctionnel
    this.sports = this.rest.getUserSports();
    this.locations = this.rest.getUserLocations();
  }

  saveAssocation(sportId, locationId) {
    this.rest.saveAssocation(sportId, locationId);
  }

  isConnected(){
    return this.session.isConnected;
  }
}