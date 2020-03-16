import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = "https://geo.api.gouv.fr/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class GeoApiService {

  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // Récupération de la liste des régions
  getRegions(): Observable<any> {
    return this.httpClient.get(endpoint + "regions", httpOptions).pipe(map(this.extractData));
  }

  // Récupération de la liste des départements d'une région
  getDepartements(codeRegion): Observable<any> {
    return this.httpClient.get(endpoint + "regions/" + codeRegion + "/departements?fields=nom,code", httpOptions).pipe(map(this.extractData));
  }

  // Récupération de la liste des communes d'un département
  getCommunes(codeDepartement): Observable<any> {
    return this.httpClient.get(endpoint + "departements/" + codeDepartement + "/communes?fields=nom,code&format=json", httpOptions).pipe(map(this.extractData));
  }
}