import { Component, Input, Output,SimpleChanges, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent {

  @Input() surcharge:any;

}
