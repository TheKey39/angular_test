import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../service/time.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  constructor(private time_service: TimeService) {}
  time: any;

  ngOnInit() {
    setInterval(() => {
      this.time =  this.time_service.GetTime();
    }, 1000);
  }
}
