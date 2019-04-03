import {Component, Input} from '@angular/core';
import {ListDemandeService} from '../services/list-demande.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-demande',
  templateUrl: 'demande.component.html'
})
export class DemandeComponent {

  @Input() demanderadios: string;
  @Input() demandedate1: string;
  @Input() demanderecep: string;
  @Input() demandeclient: string;
  @Input() demanderadios1: string;
  @Input() demandedescri: string;



  constructor(private router: Router) { }

  onCreer() {
    if (this.demanderadios === 'Installation') {
      this.router.navigate(['/tickets/ticket-install'],
        { queryParams : {'demandeclient' : this.demandeclient, 'demandedate1' : this.demandedate1, 'demanderadios1' : this.demanderadios1}});
    } else {
      this.router.navigate(['/tickets/ticket-interv'],
        { queryParams : {'demandeclient' : this.demandeclient, 'demanderadios' : this.demanderadios , 'demandedate1' : this.demandedate1,
          'demanderadios1' : this.demanderadios1}});
    }
  }
}
