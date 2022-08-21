import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollIntoViewOnLoad]'
})
export class ScrollIntoViewOnLoadDirective implements AfterViewInit {
  constructor(private readonly _elementRef: ElementRef<Element>) { }
  
  ngAfterViewInit(): void {
    this._elementRef.nativeElement.scrollIntoView({ behavior: "smooth" });
  }
}
