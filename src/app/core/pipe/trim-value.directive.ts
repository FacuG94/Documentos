import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[trimSpace]',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: TrimValueDirective, multi: true }]
})
export class TrimValueDirective implements ControlValueAccessor {

  set value(value) {
    this.value = value;
    this.onChangeFn(value);
  }
  private _value: string = '';
  previousValue: any;
  onChangeFn = (_: any) => {
    // Funcion vacia
  };
  onTouchedFn = () => {
    // Funcion vacia
  };

  constructor(private _el: ElementRef) { }
  writeValue(obj: any): void {
    obj = obj ? obj.toString().replace(/ +/g, ' ').trim() : '';
    this._el.nativeElement.value = obj || '';
    this.previousValue = obj || '';
  }
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  @HostListener('blur', ['$event'])
  onBlur(ev) {
    this.writeValue(this._el.nativeElement.value);
    if (this.previousValue !== this.value) {
      console.log(this.value);
      
      this.onChangeFn(this._el.nativeElement.value)
    }
  }
}
