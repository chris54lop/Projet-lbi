import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ListTicketService} from '../services/list-ticket.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Subscription} from 'rxjs';
import {Ticket} from './ticket';


@Component({
  templateUrl: 'ticket-install.component.html'
})
export class TicketInstallComponent implements OnInit {

  tickets: Ticket[];
  error = '';
  success = '';
  ticket = new Ticket('', '' , '' , '' , '' , '' , '' ,  '',
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
