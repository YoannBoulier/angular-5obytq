import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connexionForm: FormGroup;
  tentative = false; // Flag de tentative de connexion

  constructor(private builder: FormBuilder,
              private session : SessionService,
              private router: Router ) {
    this.connexionForm = this.builder.group({
      email: ['', [ Validators.required, Validators.pattern('[A-Za-z.]+@[A-Za-z]+[.][a-z]+')] ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
    
  }

  // Fonction lancée à la validation du formulaire de connexion
  connexion(donneesConnexion) {
    this.tentative = true;

    if (this.connexionForm.invalid) {
      return;
    }

    this.session.connect(donneesConnexion);
    
    this.router.navigateByUrl('/accueil');
  }
}