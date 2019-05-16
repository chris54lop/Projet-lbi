import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ListTechnicienService} from '../services/list-technicien.service';
import {Utilisateur} from '../utilisateur/utilisateur';
import {Technicien} from './technicien';

@Component({
  templateUrl: 'list-technicien.component.html'
})
export class ListTechnicienComponent implements OnInit {

  constructor(private router: Router,
              private listtechnicienService: ListTechnicienService) {
  }

  techniciens: Technicien[];
  error = '';
  success = '';
  technicien = new Technicien('', '' , '' );

  ngOnInit() {
    this.getTechnicien();
  }

  onAjout() {
    this.router.navigate(['/techniciens/ajout-technicien']); // Nous ramène vers la page avec le formulaire pour ajouter un technicien
  }

  getTechnicien(): void {
    this.listtechnicienService.getTechnicienFromServer().subscribe( // Fonction Get défini dans le service list-technicien
      (res: Technicien[]) => {
        this.techniciens = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
