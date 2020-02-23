import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerComponent } from './customer/customer.component';
import { AddtocartComponent } from './customer/addtocart/addtocart.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductItemComponent } from './products/products-list/product-item/product-item.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountcreationService } from './customer/accountcreation.service';
import { CustomMaterialModule } from './customer-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountverificationService } from './customer/accountverification.service';
import { HttpModule } from '@angular/http';
import { AuthGuardService } from './customer/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { ProductService } from './products/product.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CustomerComponent,
    ProductsComponent,   
    ProductsListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    AddtocartComponent,
    LoginComponent,
    SigninComponent,
    PrivacypolicyComponent,
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter() {
          return localStorage.getItem('token');
        }
      }
    }),


  ],
  providers: [AccountcreationService, AccountverificationService, AuthGuardService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
