import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../session.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
  associationForm: FormGroup;
  tentativeAssociation = false;
  sports:any[] = [];
  locations:any[] = [];
  locationChoosed; sportChoosed;
  
  constructor(private builder: FormBuilder, private rest : RestApiService, private session : SessionService) { 
    this.associationForm = this.builder.group({
      sport: ['', Validators.required ],
      location: ['', Validators.required ]
    });
  }

  ngOnInit() {
    // A modifier une fois l'appel à l'API REST fonctionnel
    this.sports = this.rest.getUserSports();
    this.locations = this.rest.getUserLocations();
  }

  saveAssociation() {
    this.tentativeAssociation = true;

    if (this.associationForm.invalid) {
      return;
    }

    console.log(this.locationChoosed);
    console.log(this.sportChoosed);

    this.rest.saveAssociation(this.sportChoosed, this.locationChoosed);
  }

  isConnected(){
    return this.session.isConnected;
  }
}