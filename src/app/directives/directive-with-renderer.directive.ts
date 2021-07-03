import { 
    Directive,
    ElementRef, 
    HostBinding, 
    HostListener, 
    Input, 
    OnInit, 
    Renderer2 } from '@angular/core';
@Directive({
    selector: '[app-bg-directive]'
})
export class DirectiveWithRenderer implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() hoverColor: string;
    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) { }
    ngOnInit() {
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'skyblue');
    }
    @HostListener('mouseenter') mouseenter(event: Event){
        this.backgroundColor = 'skyblue';
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'skyblue');
    }
    @HostListener('mouseleave') mouseleave(){
        this.backgroundColor = this.defaultColor
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    }
}