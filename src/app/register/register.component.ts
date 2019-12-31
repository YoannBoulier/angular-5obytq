import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { ValidationEmail } from '../validation-email';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  enregistrer = false;
  email: String = '';
  password: String = '';
  passwordVerif: String = '';

  constructor(private builder: FormBuilder) {
    this.registerForm = this.builder.group({
      email: ['', [ Validators.required, Validators.pattern('[A-Za-z.]+@[A-Za-z]+[.][a-z]+')] ],
      password: ['', Validators.required ],
      passwordVerif: ['', [ Validators.required, ValidationEmail.verifyEmail ] ]
    },
    {
      validator: ValidationEmail.verifyEmail
    });
  }

  ngOnInit() {
  }

  // Fonction lancée à la validation du formulaire d'inscription
  inscription(donneesInscription) {
    this.enregistrer = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log(donneesInscription);

    // Appel à l'API ici
    // -> Service à créer pour faire l'appel à l'API REST
  }
}