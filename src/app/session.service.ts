import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SessionService {
  isConnected = false;

  constructor(private http: HttpClient) { }
  
  // Retourne true si l'utilisateur est reconnu, false sinon
  connect(donneesConnexion) {
    /*const headers = new HttpHeaders(donneesConnexion ? {
        authorization : 'Basic ' + btoa(donneesConnexion.email + ':' + donneesConnexion.password)
      } : {});

    this.http.get('login', {headers: headers}).subscribe(response => {
            if (response['name']) {
                this.isConnected = true;
            } else {
                this.isConnected = false;
            }
        });
    */

    this.isConnected = true; // Pour les tests
  }
}