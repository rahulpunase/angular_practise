import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // to change the color from outside
  // property binding
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }
  // why using renderer than normal elements because it also works with service works where you might not have access to dom elements
  // so if you try to select  elements you might get error in some cases
  // we can also use host binding. Another way to manipulate the dom elements using styles
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
    // anything before rendered
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
  }

  // Host listeners--in which directive can have events
  @HostListener('mouseover') mouseover(eventData: Event) {
    // only when using the renderer
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // only when using the renderer
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
