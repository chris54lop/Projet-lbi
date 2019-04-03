import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable ()
export class ListUtilisateurService {

  constructor() {
  }
  listutilisateurSubject = new Subject<any[]>();


  addUtilisateur( name7: string, prenom5: string, select14: string, password: string) {
    const utilisateurObject = {
      name7: '',
      prenom5: '',
      select14: '',
      password: '',
    };
    utilisateurObject.name7 = name7;
    utilisateurObject.prenom5 = prenom5;
    utilisateurObject.select14 = select14;
    utilisateurObject.password = password;



  }



}
