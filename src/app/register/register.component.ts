import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { ValidationEmail } from '../validation-email';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  enregistrer = false;
  user; nom; prenom; pseudo;

  constructor(private builder: FormBuilder, public rest : RestApiService) {
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
    
    this.rest.register(donneesInscription.email, donneesInscription.password, this.nom, this.prenom, this.pseudo).subscribe((data: {}) => {
      this.user = JSON.parse(JSON.stringify(data));
    });

    console.log(this.user);
  }
}