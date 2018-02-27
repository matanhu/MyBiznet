import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PfModel } from '../models/PfModel.model';
import { WifiModel } from '../models/wifiModel.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public fbFormArray;
  public formTest: FormGroup;
  public type: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onTypeChanged() {
    switch (this.type) {
      case 'wifi':
        this.buildFormWifi();
        return;
      case 'pf_nat_rule':
        this.buildFormPf();
        return;
    }
  }

  buildFormPf() {
    this.formTest = this.fb.group({
      'pf_nat_rule': this.fb.array([this.fb.group(new PfModel())])
    });
    // this.fbFormArray = this.fb.array([new PfModel()]);
    console.log('formTest: ', this.formTest);
    // const t = new PfModel();
    // console.log(t);
  }

  buildFormWifi() {
    this.formTest = this.fb.group({
      'wifi': this.fb.array([this.fb.group(new WifiModel())])
    });
    // this.fbFormArray = this.fb.array([new PfModel()]);
    console.log('formTest: ', this.formTest);
    // const t = new PfModel();
    // console.log(t);
  }

  testSubmit() {
    console.log('formTest: ', this.formTest.value);
  }

  AddPf() {
    const formArray = this.formTest.get('pf_nat_rule') as FormArray;
    formArray.push(this.fb.group(new PfModel()));
  }

}
