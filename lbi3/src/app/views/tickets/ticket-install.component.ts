import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ListTicketService} from '../services/list-ticket.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Subscription} from 'rxjs';


@Component({
  templateUrl: 'ticket-install.component.html'
})
export class TicketInstallComponent implements OnInit {

  date1: number;
  client: string;
  radios1: number;
  private subscription: Subscription;

  constructor(private listticketService: ListTicketService,
              private router: Router,
              private route: ActivatedRoute) {
    this.subscription = this.route.queryParams.subscribe(
      params => {
        this.radios1 = params['demanderadios1'];
        this.date1 = params['demandedate1'];
        this.client = params['demandeclient'];
      }
    );
  }



  ngOnInit() {}

  onSubmit( form: NgForm) {
    console.log(form.value);
    const select17 = form.value['select17'];
    const select2 = form.value['select2'];
    const select3 = form.value['select3'];
    const addrinput = form.value['addrinput'];
    const villeinput = form.value['villeinput'];
    const infoinput = form.value['infoinput'];
    const tel5input = form.value['tel5input'];
    const tel8input = form.value['tel8input'];
    const responsinput = form.value['responsinput'];
    const select4 = form.value['select4'];
    const technicien1 = form.value['technicien1'];
    const technicien2 = form.value['technicien2'];
    const technicien3 = form.value['technicien3'];
    const technicien4 = form.value['technicien4'];
    const dateinput = form.value['dateinput'];
    const timeinput = form.value['timeinput'];
    const date1input = form.value['date1input'];
    const select18 = form.value['select18'];
    const matri1input = form.value['matri1input'];
    const textarea1input = form.value['textarea1input'];
    const textarea2input = form.value['textarea2input'];
    const forfaitinput = form.value['forfaitinput'];
    const quan1input = form.value['quan1input'];
    const oeuvreinput = form.value['oeuvreinput'];
    const quan2input = form.value['quan2input'];
    const pieceinput = form.value['pieceinput'];
    const quan3input = form.value['quan3input'];
    const name5input = form.value['name5input'];
    const textarea3input = form.value['textarea3input'];
    const time2input = form.value['time2input'];
    const time3input = form.value['time3input'];
    const textarea4input = form.value['textarea4input'];
    const fileinput = form.value['fileinput'];
    const fiche = 'Insta.';
    this.listticketService.addTicketinstall(select17, select2, select3, addrinput, villeinput, infoinput, tel5input, tel8input, responsinput, select4,
      technicien1, technicien2, technicien3, technicien4, dateinput, timeinput, date1input, select18, matri1input, textarea1input, textarea2input, forfaitinput, quan1input,
      oeuvreinput, quan2input, pieceinput, quan3input, name5input, textarea3input, time2input, time3input, textarea4input, fileinput, fiche);
    this.router.navigate(['/tickets/list-ticket']);


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
