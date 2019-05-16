import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListTicketService} from '../services/list-ticket.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Ticket} from './ticket';
import {Type} from '../materiels/type';
import {ListMaterielService} from '../services/list-materiel.service';
import {Client} from '../clients/client';
import {ListClientService} from '../services/list-client.service';
import {Donneur} from '../clients/donneur';
import {ListDonneurOrdreService} from '../services/list-donneur-ordre.service';


@Component({
  templateUrl: 'ticket-install.component.html'
})
export class TicketInstallComponent implements OnInit {

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
    '', '' , '' , '' , '' , '' , 'Installation' );


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


  onSubmit() {

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

  private resetErrors() {
    this.success = '';
    this.error   = '';
  }


  public generatePDF() { // Fonction generant un fichier PDF (ATTENTION : cette fonction prend une capture de la page pour ensuite convertir en pdf
    const data = document.getElementById('content');
    html2canvas(data).then(canvas => {
      const imgWidth = 210;
      const pageHeight = 150;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const  heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight)
      pdf.save('myPdf.pdf');
    });
  }





}
