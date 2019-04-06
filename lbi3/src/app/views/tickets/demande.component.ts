import {Component, Input} from '@angular/core';
import {ListDemandeService} from '../services/list-demande.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-demande',
  templateUrl: 'demande.component.html'
})
export class DemandeComponent {

  @Input() demandetypefiche: string;
  @Input() demandedateappel1: string;
  @Input() demanderecep: string;
  @Input() demandeclient: string;
  @Input() demandetypemat3: string;
  @Input() demandedescri: string;



  constructor(private router: Router) { }

  onCreer() {
    if (this.demandetypefiche === 'Installation') {
      this.router.navigate(['/tickets/ticket-install'],
        { queryParams : {'demandeclient' : this.demandeclient, 'demandedateappel1' : this.demandedateappel1, 'demandetypemat3' : this.demandetypemat3}});
    } else {
      this.router.navigate(['/tickets/ticket-interv'],
        { queryParams : {'demandeclient' : this.demandeclient, 'demandetypefiche' : this.demandetypefiche , 'demandedateappel1' : this.demandedateappel1,
          'demandetypemat3' : this.demandetypemat3}});
    }
  }
}
