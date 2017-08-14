import { Directive, ElementRef, Renderer,
  HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor = 'yellow';
  @Input() defaultColor = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
