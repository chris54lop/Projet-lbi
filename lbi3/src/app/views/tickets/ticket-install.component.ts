import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ListTicketService} from '../services/list-ticket.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Subscription} from 'rxjs';
import {TicketInstall} from './ticket-install';


@Component({
  templateUrl: 'ticket-install.component.html'
})
export class TicketInstallComponent implements OnInit {

  ticketinstalls: TicketInstall[];
  error = '';
  success = '';

  ticketinstall = new TicketInstall('', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , '' ,  '',
    '', '' , '' , '' , '' , '' , 'Installation' );


  date1: number;
  client: string;
  radios1: number;
  private subscription: Subscription;

  constructor(private listticketService: ListTicketService,
              private router: Router,
              private route: ActivatedRoute) {
    this.subscription = this.route.queryParams.subscribe(
      params => {
        this.radios1 = params['demandetypemat3'];
        this.date1 = params['demandedateappel1'];
        this.client = params['demandeclient'];
      }
    );
  }



  ngOnInit() {}

  /*onSubmit1( form: NgForm) {
    console.log(form.value);
    const etat1 = form.value['etat1'];
    const donneur3 = form.value['donneur3'];
    const client2 = form.value['client2'];
    const addrinput = form.value['addrinput'];
    const villeinput = form.value['villeinput'];
    const infoinput = form.value['infoinput'];
    const telfixe = form.value['telfixe'];
    const telportable = form.value['telportable'];
    const responsinput = form.value['responsinput'];
    const typecontrat = form.value['typecontrat'];
    const technicien1 = form.value['technicien1'];
    const technicien2 = form.value['technicien2'];
    const technicien3 = form.value['technicien3'];
    const technicien4 = form.value['technicien4'];
    const dateappel2 = form.value['dateappel2'];
    const heureinterv = form.value['heureinterv'];
    const dateinterv = form.value['dateinterv'];
    const typemat4 = form.value['typemat4'];
    const matri1input = form.value['matri1input'];
    const descrimat = form.value['decrimat'];
    const descritravail = form.value['descritravail'];
    const forfaitinput = form.value['forfaitinput'];
    const quan1input = form.value['quan1input'];
    const oeuvreinput = form.value['oeuvreinput'];
    const quan2input = form.value['quan2input'];
    const pieceinput = form.value['pieceinput'];
    const quan3input = form.value['quan3input'];
    const name5input = form.value['name5input'];
    const textarea3input = form.value['textarea3input'];
    const harrive = form.value['harrive'];
    const hdep = form.value['hdep'];
    const rq = form.value['rq'];
    const fileinput = form.value['fileinput'];
    const fiche = 'Insta.';
    this.listticketService.addTicketinstall(etat1, donneur3, client2, addrinput, villeinput, infoinput, telfixe, telportable, responsinput, typecontrat,
      technicien1, technicien2, technicien3, technicien4, dateappel2, heureinterv, dateinterv, typemat4, matri1input, descrimat, descritravail, forfaitinput, quan1input,
      oeuvreinput, quan2input, pieceinput, quan3input, name5input, textarea3input, harrive, hdep, rq, fileinput, fiche);
    this.router.navigate(['/tickets/list-ticket']);


  }*/

  onSubmit() {

    this.router.navigate(['/tickets/list-ticket']);

    this.resetErrors();
    this.ticketinstall = JSON.stringify(this.ticketinstall);
    console.log(this.ticketinstall);
    this.listticketService.saveTicketInstallToServer(this.ticketinstall)
      .subscribe(
        (res: TicketInstall[]) => {
          // Update the list of materiel
          this.ticketinstall = res;

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


  public generatePDF() {
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
