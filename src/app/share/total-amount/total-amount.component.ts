import { Component, Input, Output,SimpleChanges, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent {

  @Input() totalAmount:any;
}
