import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective { 
  @HostListener ('mouseenter') onMouseEnter(){
    this.highLight('yellow');
   }
   @HostListener ('mouseenter') onmouseleave(){
    this.highLight('');
   }
   private highLight(color: string){
    this.el.nativeElement.style.backgroundColor = color
   }
  constructor(private el:ElementRef) {   
  } 

}
