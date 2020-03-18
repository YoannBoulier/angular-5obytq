import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable()
export class RestApiService {

  constructor(private httpClient: HttpClient) { }

  getUserSports() {
    return [ {code : 1, name : "Badminton"} , {code : 2, name : "Football"}, {code : 3, name : "Voile"} ];
  }

  getUserLocations() {
    return [ {code : 1, name : "Bretagne"} , {code : 2, name : "Nouvelle-Aquitaine"}, {code : 3, name : "Nay"} ];
  }
  
  saveAssociation(sportId, locationId) {

    // Appel à l'API REST

  }
}