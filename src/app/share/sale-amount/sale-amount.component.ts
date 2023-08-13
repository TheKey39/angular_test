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
    let num :any = parseFloat(this.saleAmount.value).toFixed(2);
    this.saleAmount.setValue(Number(num).toLocaleString("en-US"));
    this.change_event.emit(this.saleAmount.value);
  }


}
