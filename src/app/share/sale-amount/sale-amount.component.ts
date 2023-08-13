import { Component, Input, Output,SimpleChanges, EventEmitter,OnInit } from '@angular/core';


@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent {
  @Output() change_event = new EventEmitter<any>();
  @Input() saleAmount:any;

  setTwoNumberDecimal() {
    if (!this.saleAmount.value) {
      this.saleAmount.setValue(0)
    }
    let num :any = parseFloat(this.saleAmount.value).toFixed(2);
    this.saleAmount.setValue(Number(num).toLocaleString("en-US"));
    this.change_event.emit(this.saleAmount.value);
  }

  remove_comma() {
    if (!this.saleAmount.value) {
      return;
    }
    let amount =  this.saleAmount.value.toString().replaceAll(',','');
    this.saleAmount.setValue(parseFloat(amount).toFixed(2));
  }


}
