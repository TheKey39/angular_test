import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class AlertComponentService {
  constructor(private snack: MatSnackBar) {}
  SnackBar(message: string, action: string) {
    this.snack.open(message, action);
  }

  Swal(data:any) {
    Swal.fire({
      title: data.title,
      text: data.text,
      icon: data.icon,
      confirmButtonText: 'OK'
    })
  }


}
