import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, NgZone, Output } from '@angular/core'
import { Table } from 'primeng/table';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Directive({
    selector: '[app-scroller]'
})
export class ScrollDirective implements AfterViewInit {
    @Output() sendCallBack = new EventEmitter();
    previousValue = 0;
    scrollDir: string = undefined;
    myVariable: Observable<any>;
    constructor(
        private elementRef: ElementRef,
        private table: Table,
        private readonly zone: NgZone
    ) { }
    @HostListener('scroll', ['$event']) onScroll(event: Event) {
        console.log(event)
        this.scrollFunction(event);
        // fromEvent(this.elementRef.nativeElement, 'scroll')
        //     .subscribe((e: Event) =>
        //         console.log(e.target)
        //     );
        // console.log(this.table.scrollHeight)
        // // const test$ = fromEvent(this.table.el.nativeElement, 'scroll').pipe(
        // //     map((data: any) => {
        // //         console.log(data);
        // //     })
        // // )
        // // console.log(test$);
        // // .subscribe(
        // //     data => {
        // //         console.log(data);
        // //     }
        // // );
    }
    ngAfterViewInit() {
        const test$ = fromEvent(this.table.el.nativeElement, 'scroll')
        .subscribe(da => {return da});
        console.log(test$)
    }
    scrollFunction(event) {
        // this.myVariable.pipe(map((t: any) => {
        //     console.log(t);
        // }))
        const tracker = event.target;
        if (tracker.scrollTop > this.previousValue) {
            this.scrollDir = 'down';
        } else {
            this.scrollDir = 'up';
        }
        let limit = tracker.scrollHeight - tracker.clientHeight;
        if (event.target.scrollTop === limit) {
            this.sendCallBack.emit(true);
        }
        else if (event.target.scrollTop <= Math.floor(limit / 8) && this.scrollDir === 'up') {
            // console.log('scrolled to top');
            this.sendCallBack.emit(false);
        }
        this.previousValue = tracker.scrollTop;
    }
    sendCallBackFunction() {
        this.sendCallBack.emit(true)
    }
}