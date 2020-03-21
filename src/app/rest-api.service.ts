import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = "http://localhost:9090";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RestApiService {

  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // TEST A FAIRE
  register(email, password, nom, prenom, pseudo): Observable<any>{
    return this.httpClient.post(endpoint + "/user", { "email": email, "password": password, "firstname": prenom, "lastname": nom, "username": pseudo }, httpOptions).pipe(map(this.extractData));
  }

  // TEST A FAIRE
  getUserSports(userId): Observable<any> {
    return this.httpClient.get(endpoint + "/user/" + userId + "/sports", httpOptions).pipe(map(this.extractData));
  }
  
  // TEST A FAIRE
  getUserLocations(userId): Observable<any> {
    return this.httpClient.get(endpoint + "/user/" + userId + "/locations", httpOptions).pipe(map(this.extractData));
  }

  // TEST A FAIRE
  getUserAssociations(userId): Observable<any> {
    return this.httpClient.get(endpoint + "/user/" + userId + "/associations", httpOptions).pipe(map(this.extractData));
  }

  // TEST OK
  getWeathers(): Observable<any> {
    return this.httpClient.get(endpoint + "/weathers", httpOptions).pipe(map(this.extractData));
  }
  
  // TEST A FAIRE
  saveAssociation(sportId, locationId) {
    return this.httpClient.put(endpoint + "/sport/" + sportId + "/location/" + locationId, httpOptions).pipe(map(this.extractData));
  }

  // TEST A FAIRE
  saveSport(userId, nom, weather, houleMin, houleMax, ventMin, ventMax) {
    return this.httpClient.post(endpoint, { "name": nom, "idealWeather": weather, "windMaxSpeed": ventMax, "windMinSpeed": ventMin, "seaLevelMax": houleMax, "seaLevelMin": houleMin }, httpOptions).pipe(map(this.extractData));
  }

  // TEST A FAIRE
  saveLocation(userId, nom, location) {
    return this.httpClient.post(endpoint  + "/user/" + userId + "/location", { "name": nom, "location": location }, httpOptions).pipe(map(this.extractData));
  }  
}