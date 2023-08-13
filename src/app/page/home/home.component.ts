import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertComponentService } from '../../service/alert-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _formBuilder: FormBuilder,private alert_service:AlertComponentService) {}

  firstFormGroup = this._formBuilder.group({
    filingType: ['0', Validators.required],
    month: ['', Validators.required],
    year: ['', Validators.required],
    type: [''],
    taxAmount:['', Validators.required],
    saleAmount:['', Validators.required],
    surcharge:[0],
    penalty:[0],
    totalAmount:[0],
  });

  taxData :any;

 findInvalidControls() {
    let invalid = [];
    let controls : any = this.firstFormGroup.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}

  log() {
    if (this.firstFormGroup.invalid) {
      let text = '';
      for (let i of this.findInvalidControls()) {
        text += `${i} `
      }
      this.alert_service.Swal({
        title:'Invalid Form',
        text:`( ${text} )`,
        icon:'error'
      })
      return
    }
  }

  submit() {
    this.taxData = this.firstFormGroup.value
    this.alert_service.Swal({
      title:'Success (Showing JSON)',
      text: JSON.stringify(this.taxData),
      icon:'success'
    })
  }

}
