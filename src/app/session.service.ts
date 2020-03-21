import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


const endpoint = "http://localhost:9090";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class SessionService {
  isConnected = false;
  user;

  constructor(private http: HttpClient, private router: Router) { }

  // Retourne true si l'utilisateur est reconnu, false sinon
  connect(donneesConnexion): Observable<any> {
    return this.http.get(endpoint + "/login?email=" + donneesConnexion.email + "&password=" + donneesConnexion.password, httpOptions).pipe(map(this.extractData));
  }

  getConnectedUserId() {
    return "1";//this.user.id;
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}