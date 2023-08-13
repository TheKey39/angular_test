import { Component, Input, SimpleChanges } from '@angular/core';
import { AlertComponentService } from '../../service/alert-component.service';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.css']
})
export class ReviewConfirmComponent {
  @Input() form: any;


  constructor(private alert_service:AlertComponentService) {}

  ngOnInit() {
  }
}
