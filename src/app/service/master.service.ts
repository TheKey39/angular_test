import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}

  static_year: any = 2020;
  month: any = [
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

  GetYear() {
    let year: any = [];
    for (let i = this.static_year; i <= new Date().getFullYear(); i++) {
      year.push(i);
    }
    return year;
  }

  GetActiveMonth(year: any) {
    if (year == new Date().getFullYear()) {
      let now = new Date().getMonth();
      let temp_month = [];
      for (let i = 0; i < now; i++) {
        temp_month.push(this.month[i]);
      }
      return temp_month ;
    }
    return this.month;
  }

  GetMonth() {
    return this.month;
  }
}
