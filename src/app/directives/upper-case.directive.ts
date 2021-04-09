import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appUpperCase]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UpperCaseDirective),
      multi: true,
    },
  ],
})
export class UpperCaseDirective implements ControlValueAccessor {

  onChange: (_: any) => void;
  touched: (_: any) => void;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key) {
      const value = this.elementRef.nativeElement.value.toUpperCase();
      this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
      this.onChange(value);
      event.preventDefault();
    }
  }

  writeValue(obj: any): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

}
