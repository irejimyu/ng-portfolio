import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'none');
  }



}
