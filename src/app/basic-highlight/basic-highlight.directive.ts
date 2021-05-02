import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
constructor(private elementRef: ElementRef){

}

ngOnInit(){

    //this is not a good practise - angular is also able to render templates without a DOM
    this.elementRef.nativeElement.style.backgroundColor = "green";


}
}