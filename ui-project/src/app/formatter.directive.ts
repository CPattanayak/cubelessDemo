import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormatter]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class FormatterDirective {
  private element: HTMLElement;
  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  onMouseEnter() {
    this.element.style.fontWeight = 'bold';
  }
  onMouseLeave() {
    this.element.style.fontWeight = 'normal';
  }

}
