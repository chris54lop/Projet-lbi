import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-list-utilisateur',
  templateUrl: 'list-utilisateur.component.html'
})
export class ListUtilisateurComponent {



  constructor( ) { }
  @Input() listutilisateurname7: string;
  @Input() listutilisateurprenom5: string;
  @Input() listutilisateurniv: string;
  @Input() listutilisateurpassword: string;
}

