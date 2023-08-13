import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {

  @Input() month: any;
  @Input() year: any;

  constructor(private master_service:MasterService) {
  }

  master_month : any = this.master_service.GetMonth()
  current_month:any = new Date().getMonth();
  current_year:any = new Date().getFullYear();


}
