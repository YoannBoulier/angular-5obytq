import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connexionForm: FormGroup;
  connecter = false;

  constructor(private builder: FormBuilder) {
    this.connexionForm = this.builder.group({
      email: ['', [ Validators.required, Validators.pattern('[A-Za-z.]+@[A-Za-z]+[.][a-z]+')] ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  // Fonction lancée à la validation du formulaire de connexion
  connexion(donneesConnexion) {
    this.connecter = true;

    if (this.connexionForm.invalid) {
      return;
    }

    console.log(donneesConnexion);

    // Appel à l'API ici
    // -> Service à créer pour faire l'appel à l'API REST
  }
}