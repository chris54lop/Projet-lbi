// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ExcelService} from '../services/excel.service';
import {StatComponent} from './stat.component';
import {StatRoutingModule} from './stat-routing.module';



@NgModule({
  imports: [
    CommonModule,
    StatRoutingModule,
    FormsModule,
  ],
  declarations: [
  StatComponent
  ],
  providers: [
  ExcelService
  ]
})
export class StatModule { }

