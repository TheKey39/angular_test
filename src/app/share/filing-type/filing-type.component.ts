import { Component, Input, Output, SimpleChanges, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css'],
})
export class FilingTypeComponent {
  @Input() filingType: any;
  @Output() change_event = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  change_e() {
    this.change_event.emit(this.filingType.value);
  }
}
