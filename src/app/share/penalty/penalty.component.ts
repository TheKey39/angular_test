import { Component, Input, Output,SimpleChanges, EventEmitter,OnInit } from '@angular/core';
@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent {

  @Input() penalty:any;


}
