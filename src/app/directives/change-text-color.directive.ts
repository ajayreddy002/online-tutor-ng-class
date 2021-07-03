import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
    selector: '[app-change-text-color]'
})
export class ChangeTextColorDirective implements OnInit {
    constructor(
        private element: ElementRef
    ){}
    ngOnInit(){
        this.element.nativeElement.style.color = 'blue';
    }
}