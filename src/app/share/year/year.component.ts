import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent {

  constructor(private master_service:MasterService) {
  }

  @Input() year: any;
  @Input() month: any;


  master_year : any = this.master_service.GetYear()
  current_year:any = new Date().getFullYear();
  current_month:any = new Date().getMonth();
  active_month:any

  set_month() {
    this.active_month = this.master_service.GetActiveMonth(this.year.value)?.length;
    if (this.current_year == this.year.value && (this.current_month >= this.active_month) ) {
      this.month.setValue('')
    }

  }

}
