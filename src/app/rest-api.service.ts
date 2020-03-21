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

  // TEST OK
  register(email, password): Observable<any>{
    return this.httpClient.post(endpoint + "/user", { "email": email, "password": password  }, httpOptions).pipe(map(this.extractData));
  }

  getUserSports(userId): Observable<any> {
    return this.httpClient.get(endpoint + "/user/" + userId + "/sports", httpOptions).pipe(map(this.extractData));
  }
  
  getUserLocations(userId): Observable<any> {
    return this.httpClient.get(endpoint + "/user/" + userId + "/locations", httpOptions).pipe(map(this.extractData));
  }

  getUserAssociations(userId): Observable<any> {
    return this.httpClient.get(endpoint + "/user/" + userId + "/associations", httpOptions).pipe(map(this.extractData));
  }

  // TEST OK
  getWeathers(): Observable<any> {
    return this.httpClient.get(endpoint + "/weathers", httpOptions).pipe(map(this.extractData));
  }
  
  saveAssociation(sportId, locationId) {
    // Appel à l'API REST
  }
}