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
  userData: any;
  isSubmitted: boolean;
  constructor() { }

  ngOnInit(): void {
    this.userData = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,40}$/)]),
      phone_number: new FormControl('', [Validators.required, Validators.pattern(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/)]),
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
}
