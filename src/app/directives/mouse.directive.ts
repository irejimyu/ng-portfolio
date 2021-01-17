import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }


  @HostListener("document:scroll", ["$event"])
  @HostListener("document:mousemove", ["$event"])
  onMousemove(e) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', `${e.pageY - scrollY}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', `${e.pageX - scrollX}px`);
    this.renderer.removeClass(this.elementRef.nativeElement, 'hidden')
  }
}
