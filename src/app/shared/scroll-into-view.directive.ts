import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appScrollIntoView]'
})
export class ScrollIntoViewDirective implements AfterViewInit, OnDestroy {
  @Input('appScrollIntoView') scrollIntoView$: Observable<void>;

  private _scrollIntoViewSub: Subscription;

  constructor(private readonly _elementRef: ElementRef<Element>) { }

  ngAfterViewInit(): void {
    this._scrollIntoViewSub = this.scrollIntoView$.subscribe(() => {
      this._elementRef.nativeElement.scrollIntoView({ behavior: "smooth" });
    });
  }

  ngOnDestroy(): void {
    this._scrollIntoViewSub?.unsubscribe();
  }
}
