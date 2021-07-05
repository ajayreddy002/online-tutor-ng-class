import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { ChangeTextColorDirective } from './directives/change-text-color.directive';
import { DirectiveWithRenderer } from './directives/directive-with-renderer.directive';
import { ScrollDirective } from './directives/scroll.directive';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    CartComponent,
    CheckoutComponent,
    EmployeeRegisterComponent,
    ChangeTextColorDirective,
    DirectiveWithRenderer,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
