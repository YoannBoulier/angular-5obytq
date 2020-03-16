import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable()
export class RestApiService {

  constructor(private httpClient: HttpClient) { }

  getSports() {
    return [ {code : 1, nom : "Badminton"} , {code : 2, nom : "Football"}, {code : 3, nom : "Voile"} ];
  }

}