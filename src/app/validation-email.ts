import { FormGroup } from '@angular/forms';

export class ValidationEmail {

  // Compare les deux emails renseignés dans le formulaire d'inscription pour vérifier qu'ils sont bien égaux
  public static verifyEmail(group: FormGroup) {
    if (group.controls != null || group.parent != null)
    {
      var password = null;
      var passwordVerif = null;
      if (group.controls != null)
        password = group.controls['password'];
      else
        password = group.parent.controls['password'];
      if (group.controls != null)
        passwordVerif = group.controls['passwordVerif'];
      else
        passwordVerif = group.parent.controls['passwordVerif'];
      if (password.value !== passwordVerif.value) {
        passwordVerif.setErrors({verifyEmail: true});
      }
    }

    return null; 
  }
}