import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IShopItems } from '../models/shop-item.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  isFormShow = false;
  shopItems: IShopItems[] = [
    { title: 'tets', description: 'This is a shop item', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2jk5bXERB5bP4YCHd1HJ-CFKIE2o6KlM1Q&usqp=CAU' }
  ];
  title: string = '';
  description: string = '';
  imageUrl: string = '';
  userData:any;
  constructor() { }

  ngOnInit(): void {
    this.userData = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl,
      password: new FormControl
    });
  }
  showPoductForm() {
    this.isFormShow = !this.isFormShow;
  }
  addProduct() {
    if (this.title !== '' && this.description !== '' && this.imageUrl !== '') {
      this.shopItems.push({ title: this.title, description: this.description, imageUrl: this.imageUrl });
      this.isFormShow = false;
      this.title = ''; this.description = '', this.imageUrl = ''
    } else {
      alert('Please enter valid details');
    }
  }
  onFormSubmit(){
    console.log(this.userData.controls.firstName.errors.required)
  }

  deleteItem(index: number) {
    this.shopItems.splice(index, 1)
  }
}
