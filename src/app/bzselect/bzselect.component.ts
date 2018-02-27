import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-bzselect',
  templateUrl: './bzselect.component.html',
  styleUrls: ['./bzselect.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BzselectComponent),
      multi: true
    }
  ]
})

export class BzselectComponent implements OnInit, ControlValueAccessor {
  public selected = 'default value';

  // the method set in registerOnChange, it is just
  // a placeholder for a method that takes one parameter,
  // we use it to emit changes back to the form
  private propagateChange = (_: any) => {};
  private propagateTouched = (_: any) => {};

  constructor() {}

  ngOnInit() {}

  writeValue(obj: any): void {
    if (obj) {
      this.selected = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  private onChange(event) {
    // update the form
    this.propagateChange(event.target.value);
  }
}
