import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFundoAzul]'
})
export class FundoAzulDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'blue';
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'blue'
    );
  }

}
