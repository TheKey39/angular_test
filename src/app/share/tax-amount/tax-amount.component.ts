import { Component, Input, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css'],
})
export class TaxAmountComponent {
  @Input() taxAmount: any;
  old_tax: any;

  setTwoNumberDecimal() {
    let num: any = parseFloat(this.taxAmount.value).toFixed(2);

    if (this.diff(this.old_tax, num) > 20) {
      // this.taxAmount.setValue(Number(this.old_tax).toLocaleString('en-US'));
      return;
    }
    this.taxAmount.setValue(Number(num).toLocaleString('en-US'));
  }

  ngOnInit() {
    this.old_tax = this.taxAmount?.value;
  }

  diff(num1: any, num2: any) {
    if (num1 > num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  }
}
