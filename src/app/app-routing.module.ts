import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
const routes: Routes = [
    { path: '', redirectTo: 'shopping', pathMatch: 'full'},
    { path: 'shopping', component: ShoppingListComponent },
    {path: '**', component: CartComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }