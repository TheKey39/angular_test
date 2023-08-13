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

  master_year : any = this.master_service.GetYear()

}
