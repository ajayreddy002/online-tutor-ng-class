import {Injectable} from '@angular/core';
import { IShopItems } from '../models/shop-item.model';
@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {
    shopItems:IShopItems[] = [
        { title: 'tets', description: 'This is a shop item', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2jk5bXERB5bP4YCHd1HJ-CFKIE2o6KlM1Q&usqp=CAU', price: 100 },
    ];

    getIntialProduct(){
       return this.shopItems.slice();
    }
    setProductData(shopItem: IShopItems) {
        this.shopItems.push(shopItem);
    }
}