import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListTicketService} from '../services/list-ticket.service';
import {Ticket} from './ticket';
import {Type} from '../materiels/type';
import {ListMaterielService} from '../services/list-materiel.service';
import {Client} from '../clients/client';
import {ListClientService} from '../services/list-client.service';
import {Donneur} from '../clients/donneur';
import {ListDonneurOrdreService} from '../services/list-donneur-ordre.service';


@Component({
  templateUrl: 'ticket-interv.component.html'
})
export class TicketIntervComponent implements OnInit {

  types: Type[];
  type = new Type('');

  clients: Client[];
  client = new Client( '', '', '', '', '', '', '', '',
    '', '', '', '', '', '');

  donneurs: Donneur[];
  donneur = new Donneur('', '', '', '', '', '',
    '', '', '', '', '', '', '',
    '', '', '');

  tickets: Ticket[];

  error = '';
  success = '';

  ticket = new Ticket('', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' );



  constructor(private listticketService: ListTicketService,
              private router: Router,
              private route: ActivatedRoute,
              private listmaterielService: ListMaterielService,
              private listdonneurService: ListDonneurOrdreService,
              private listclientService: ListClientService) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.ticket.dateappel3 = params.dateappel3;
      this.ticket.client4 = params.client4;
      this.ticket.typemat5 = params.typemat5;
    })
    this.getType();
    this.getClient();
    this.getDonneur();
  }

  getDonneur(): void {
    this.listdonneurService.getDonneurFromServer().subscribe(
      (res: Donneur[]) => {
        this.donneurs = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }
  getType(): void {
    this.listmaterielService.getTypeFromServer().subscribe(
      (res: Type[]) => {
        this.types = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getClient(): void {
    this.listclientService.getClientFromServer().subscribe(
      (res: Client[]) => {
        this.clients = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  onSubmit1() {

    this.router.navigate(['/tickets/list-ticket']);

    this.resetErrors();
    this.ticket = JSON.stringify(this.ticket);
    console.log(this.ticket);
    this.listticketService.saveTicketToServer(this.ticket)
      .subscribe(
        (res: Ticket[]) => {
          // Update the list of materiel
          this.ticket = res;

          // Inform the user
          this.success = 'Created successfully';
          console.log(this.success);
        },
        (err) => this.error = err
      );
  }

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }


}
