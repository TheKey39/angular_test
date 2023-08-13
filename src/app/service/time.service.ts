import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  GetTime() {
    let date = new Date().toJSON().slice(0, 10);
    let time = new Date().toLocaleTimeString();
    return `Time in Thailand : ${time} | ${date}`;
  }
}
