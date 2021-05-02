import { OnInit, Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  
  @Input() defaultColor: string = "'transparent'";
  @Input() highlightColor: string = "'blue'";

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
  }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement,"background-color","blue");
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  

  //react to events occuring on the element the directive sits on
  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,"background-color","blue");
    this.backgroundColor = this.highlightColor;
    
  }

  //react to events occuring on the element the directive sits on
  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,"background-color","transparent");
    this.backgroundColor = this.defaultColor;
  }

}
