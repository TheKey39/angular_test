import { Component, Input, SimpleChanges, OnInit , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css'],
})
export class TaxAmountComponent {
  @Output() change_event = new EventEmitter<any>();
  @Input() taxAmount: any;


  setTwoNumberDecimal() {
    this.change_event.emit(this.taxAmount.value);
  }

  remove_comma() {
    if (!this.taxAmount.value) {
      return;
    }
    let amount =  this.taxAmount.value.toString().replaceAll(',','');
    this.taxAmount.setValue(parseFloat(amount).toFixed(2));
  }


  ngOnInit() {

  }

}
