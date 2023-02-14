import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {

  private _onTouched = () => {};
  private _value!: string;
  public onChange = (value: string): void => {};

  @Input() isDisabled: boolean = false;
  @Input() placeholder!: string;
  @Input() label?: string;
  @Input() set inputValue (value: string){
    this._value = value;
  }

  public set value(value: string){
    this._value = value;
  }

  public get value(): string{
    return this._value;
  }

  public writeValue(value: string) {
    if(value && value.trim()){
      this.value = value;
    }
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

}
