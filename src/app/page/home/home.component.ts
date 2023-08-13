import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _formBuilder: FormBuilder) {}

  firstFormGroup = this._formBuilder.group({
    filingType: ['0', Validators.required],
    month: ['', Validators.required],
    year: ['', Validators.required],
    type: [''],
    taxAmount:['', Validators.required],
    saleAmount:['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  log() {
    console.log(this.firstFormGroup)
  }

}
