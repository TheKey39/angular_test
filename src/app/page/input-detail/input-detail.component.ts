import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css'],
})
export class InputDetailComponent {
  @Input() form: any;
  filingType: any
  month:any;
  year:any;
  type:any;
  saleAmount:any;
  taxAmount:any;
  master_type : any = ['On Time']
  constructor() {

  }

  ngOnInit() {
    this.filingType = this.form?.get('filingType');
    this.month = this.form?.get('month');
    this.year = this.form?.get('year');
    this.type = this.form?.get('type');
    this.saleAmount = this.form?.get('saleAmount');
    this.taxAmount = this.form?.get('taxAmount');
  }

  set_filing_type(event:any) {
    console.log(event,this.filingType)
  }
  set_sale_amount(event:any) {
    this.taxAmount.setValue(parseFloat(this.saleAmount.value) + parseFloat(this.saleAmount.value)*(0.07))
  }

}
