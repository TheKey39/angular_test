import { Component, Input, SimpleChanges } from '@angular/core';
import { AlertComponentService } from '../../service/alert-component.service';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css'],
})
export class InputDetailComponent {
  @Input() form: any;
  filingType: any;
  month: any;
  year: any;
  type: any;
  saleAmount: any;
  taxAmount: any;
  surcharge: any;
  penalty: any;
  totalAmount: any;
  master_type: any = ['On Time'];
  temp_tax:any = 0;
  constructor(private alert_service:AlertComponentService) {}

  ngOnInit() {
    this.filingType = this.form?.get('filingType');
    this.month = this.form?.get('month');
    this.year = this.form?.get('year');
    this.type = this.form?.get('type');
    this.saleAmount = this.form?.get('saleAmount');
    this.taxAmount = this.form?.get('taxAmount');
    this.surcharge = this.form?.get('surcharge');
    this.penalty = this.form?.get('penalty');
    this.totalAmount = this.form?.get('totalAmount');
  }

  set_filing_type(event: any) {
    this.set_total_form();
  }


  set_sale_amount(event: any) {
    if (!this.saleAmount.value) {
      this.saleAmount.setValue(0)
    }
    let sale_amount:any = this.saleAmount.value.toString().replaceAll(',', '')
    let amount = (
      parseFloat(sale_amount) +
      parseFloat(sale_amount) * 0.07
    ).toFixed(2);
    this.taxAmount.setValue(Number(amount).toLocaleString('en-US'));
    this.temp_tax = amount;
    this.set_total_form();
  }

  set_tax_amount(event:any) {
    if (!this.taxAmount.value) {
      this.taxAmount.setValue(0)
    }
    let tax_amount: any = this.taxAmount.value.toString().replaceAll(',', '');
    let num_tax: any = parseFloat(tax_amount).toFixed(2);
    if (this.diff(num_tax, parseFloat(this.temp_tax)) > 20) {
      this.taxAmount.setValue(Number(this.temp_tax).toLocaleString('en-US'));
      this.alert_service.SnackBar('Invalid Tax','OK')
    } else {
      this.taxAmount.setValue(Number(num_tax).toLocaleString('en-US'));
    }

    this.set_total_form();
  }

  set_total_form() {
    if (!this.saleAmount.value) {
      this.saleAmount.setValue(0)
    }
    if (!this.taxAmount.value) {
      this.taxAmount.setValue(0)
    }
    let tax_amount: any = this.taxAmount.value.toString().replaceAll(',', '');
    if (this.filingType?.value == 1) {
      let surcharge: any = (parseFloat(tax_amount) * 0.1).toFixed(2);
      let penalty: any = 200.00;
      let totalAmount: any = (parseFloat(tax_amount) + parseFloat(surcharge) + parseFloat(penalty)).toFixed(2);
      this.surcharge.setValue(Number(surcharge).toLocaleString('en-US'));
      this.penalty.setValue(Number(penalty).toLocaleString('en-US'));
      this.totalAmount.setValue(Number(totalAmount).toLocaleString('en-US'));
    } else {{
      this.surcharge.setValue(0);
      this.penalty.setValue(0);
      this.totalAmount.setValue(0);
    }}
  }

  
  diff(num1: any, num2: any) {
    if (num1 > num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  }
}
