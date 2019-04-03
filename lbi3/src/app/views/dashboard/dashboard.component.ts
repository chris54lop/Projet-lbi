import {Component, Input, OnInit} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  nbdemande ;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }






}
