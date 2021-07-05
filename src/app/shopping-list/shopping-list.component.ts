import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { IShopItems } from '../models/shop-item.model';
import {ShoppingListService} from '../services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  isFormShow = false;
  shopItems: IShopItems[];
  title: string = '';
  description: string = '';
  imageUrl: string = '';
  userData: FormGroup;
  isSubmitted: boolean;
  isCartShow = false;
  selectedProduct: IShopItems;
  @ViewChild('test', {static: false}) testElement: ElementRef;
  sendCallBack;
  constructor(
    private formBuilder: FormBuilder,
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.getShoppingItems();

    this.userData = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,40}$/)]],
      phone_number: ['', [Validators.required, Validators.pattern(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/)]]
    })
  }
  showPoductForm() {
    this.isFormShow = !this.isFormShow;
  }
  scrollBack(event){
    if(event === true){
      this.shopItems.push(...this.shopItems);
      console.log(event, 'hey scrool back')
    }
  }
  addProduct() {
    console.log(document.getElementById('imageUrl'))
    if (this.title !== '' && this.description !== '' && this.imageUrl !== '') {
      this.shoppingListService.setProductData({ title: this.title, description: this.description, imageUrl: this.imageUrl, price: 100 })
      // this.shopItems.push({ title: this.title, description: this.description, imageUrl: this.imageUrl, price: 100 });
      this.isFormShow = false;
      this.getShoppingItems();
      this.title = ''; this.description = '', this.imageUrl = ''
    } else {
      alert('Please enter valid details');
    }
  }

  getShoppingItems(){
    this.shopItems = this.shoppingListService.getIntialProduct();
  }

  onFormSubmit() {
    if (this.userData.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

  deleteItem(index: number) {
    this.shopItems.splice(index, 1)
  }

  addDataTdForm(tdForm: NgForm) {
    if (tdForm.valid) {
      console.log(tdForm.value);
    } else {
      alert('please enter valid details')
    }
  }

  addToCart(shopItem: IShopItems) {
    this.isCartShow = true;
    this.selectedProduct = shopItem
  }

  continueShopping(event: boolean){
    console.log(event);
    this.isCartShow = event;
  }

  submitTest(){
    this.testElement.nativeElement.style.display = 'none';
  }
}
