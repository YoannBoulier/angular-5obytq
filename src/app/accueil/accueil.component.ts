import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../session.service';
import { GeoApiService } from '../geo-api.service';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.component.html',
  styleUrls: [ 'accueil.component.css' ],
})
export class AccueilComponent implements OnInit {
  locationForm: FormGroup;
  sportForm: FormGroup;
  tentativeCreationLocalisation = false;
  tentativeCreationSport = false;
  regions:any[] = [];
  departements:any[] = [];
  communes:any[] = [];
  weathers:any[] = [];
  regionChoosed; departementChoosed; communeChoosed; nom;
  sportChoosed; temps; aquatique; houleMin; houleMax; exterieur; ventMin; ventMax;

  constructor(private builder: FormBuilder, private api : GeoApiService, private rest : RestApiService, private session : SessionService) { 
    this.locationForm = this.builder.group({
      region: ['', Validators.required ],
      departement: ['', Validators.required ],
      commune: ['', Validators.required ],
      nom: ['', Validators.required ]
    });
    this.sportForm = this.builder.group({
      sport: ['', Validators.required ],
      tempsIdeal: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.api.getRegions().subscribe((data: {}) => {
      this.regions = JSON.parse(JSON.stringify(data));
    });
    this.rest.getWeathers().subscribe((data: {}) => {
      this.weathers = JSON.parse(JSON.stringify(data));
    });
  }

  displayDepartements(region) {
    if (region != undefined)
    {
      console.log(region);
      this.api.getDepartements(region).subscribe((data: {}) => {
        this.departements = JSON.parse(JSON.stringify(data));
      });
    }
  }

  displayCommunes(departement) {
    if (departement != undefined)
    {
      this.api.getCommunes(departement).subscribe((data: {}) => {
        this.communes = JSON.parse(JSON.stringify(data));
      });
    }
  }

  saveLocation() {
    this.tentativeCreationLocalisation = true;

    if (this.locationForm.invalid) {
      return;
    }

    console.log(this.communeChoosed);

    this.rest.saveLocation(this.session.getConnectedUserId(), this.nom, this.communeChoosed).subscribe((data: {}) => {
      console.log(data);
    });

  }

  saveSport() {
    this.tentativeCreationSport = true;

    if (this.sportForm.invalid) {
      return;
    }

    console.log(this.sportChoosed); 
    console.log(this.temps);
    console.log(this.aquatique); 
    console.log(this.houleMin); 
    console.log(this.houleMax); 
    console.log(this.exterieur);
    console.log(this.ventMin); 
    console.log(this.ventMax);

    // Appel à l'API REST pour sauvegarde le sport
    this.rest.saveSport(this.session.getConnectedUserId(), this.sport, this.communeChoosed).subscribe((data: {}) => {
      console.log(data);
    });
  }

  isConnected(){
    return this.session.isConnected;
  }
} 