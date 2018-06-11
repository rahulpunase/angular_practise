import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicDirective]'
})

export class BasicDirective  implements OnInit {
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'rgb(165,200,177)';
  }
}
