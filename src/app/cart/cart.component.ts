import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { IShopItems } from '../models/shop-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
   {
  @Input() cartData: IShopItems;
  @Output() continueShop = new EventEmitter();
  constructor() {
    console.log('constructor')
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ng on changes')
  }
  ngOnInit(): void {
    console.log('ng oninit')
  }
  ngDoCheck(){
    console.log('ng DoCheck')
  }
  ngAfterContentInit(){
    console.log('content init')
  }
  ngAfterContentChecked(){
    console.log('content checked')
  }
  ngAfterViewInit(){
    console.log('view init')
  }
  ngAfterViewChecked(){
    console.log('view checked')
  }
  ngOnDestroy(){
    console.log('on destroy')
  }
  continueShopping() {
    this.continueShop.emit(false);
  }
}
