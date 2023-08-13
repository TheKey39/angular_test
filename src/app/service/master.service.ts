import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}

  static_year: any = 2020;

  GetYear() {
    let year: any = [];
    for (let i = this.static_year; i <= new Date().getFullYear(); i++) {
      year.push(i);
    }
    return year;
  }

  GetMonth() {
    let month: any = [
      {
        abbreviation: 'Jan',
        name: 'January',
      },
      {
        abbreviation: 'Feb',
        name: 'February',
      },
      {
        abbreviation: 'Mar',
        name: 'March',
      },
      {
        abbreviation: 'Apr',
        name: 'April',
      },
      {
        abbreviation: 'May',
        name: 'May',
      },
      {
        abbreviation: 'Jun',
        name: 'June',
      },
      {
        abbreviation: 'Jul',
        name: 'July',
      },
      {
        abbreviation: 'Aug',
        name: 'August',
      },
      {
        abbreviation: 'Sep',
        name: 'September',
      },
      {
        abbreviation: 'Oct',
        name: 'October',
      },
      {
        abbreviation: 'Nov',
        name: 'November',
      },
      {
        abbreviation: 'Dec',
        name: 'December',
      },
    ];
    return month;
  }
}
