import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.component.html',
  styleUrls: [ 'accueil.component.css' ],
})
export class AccueilComponent implements OnInit {
  lat = 47.09569;
  lng = 4.6520182;
  zoom = 6;
  markers = [];

  ngOnInit() {
    this.getAllDestinations();
  }

  getAllDestinations()
  {
    // Appel à l'api pour récupérer toute les destinations possibles et les afficher sur la carte

    // Stockage en dur pour les tests
    this.markers = [
      { lat: 48.185663, lng: -1.632535 },
      { lat: 48.1137195, lng: -1.6335799 }
    ];
  }

  ShowDestinationInfos(event)
  {
    // Appel à l'api pour récupérer les informations sur la destination en fonction de ses coordonnées
    // Informations récupérées à définir

    
  }
}