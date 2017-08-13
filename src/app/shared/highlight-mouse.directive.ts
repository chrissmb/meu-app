import { Directive, ElementRef,
    Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

// @HostBinding('style.backgroundColor') backgroundColor: string;
@HostBinding('style.backgroundColor') get color() {
  // regra de negocio
  return this._backgroundColor;
}
private _backgroundColor: string;

@HostListener('mouseenter') onMouseOver() {
  this._backgroundColor = 'yellow';
}

@HostListener('mouseleave') onMouseLeave() {
  this._backgroundColor = null;
}

  constructor() { }

}
