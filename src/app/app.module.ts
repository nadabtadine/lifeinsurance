import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { CommonModule, AsyncPipe } from '@angular/common';
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
import { FilterPipe } from './filter.pipe';

import { HealthinsuranceComponent } from './products/healthinsurance/healthinsurance.component';
import { IndividualinsuranceComponent } from './products/individualinsurance/individualinsurance.component';
import { EducationalComponent } from './products/educational/educational.component';
import { PropretiesinsuranceComponent } from './products/propretiesinsurance/propretiesinsurance.component';
import { Simulation3Component } from './simulation/simulation3/simulation3.component';
import { Simulation1Component } from './simulation/simulation1/simulation1.component';
import { Simulation4Component } from './simulation/simulation4/simulation4.component';
import { Simulation2Component } from './simulation/simulation2/simulation2.component';
import { SimulationService } from './simulation/simulation.service';
import { SimulationresultComponent } from './simulation/simulationresult/simulationresult.component';



@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,

    MenuComponent,
    CustomerComponent,
    ProductsComponent,   
    ProductsListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    AddtocartComponent,
    LoginComponent,
    SigninComponent,
    FilterPipe,
    PrivacypolicyComponent,
    ContactusComponent,
    HealthinsuranceComponent,
    IndividualinsuranceComponent,
    EducationalComponent,
    PropretiesinsuranceComponent,
    SimulationresultComponent,
    Simulation1Component,
    Simulation2Component,
    Simulation3Component,
    Simulation4Component,
    
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

  exports:[FilterPipe, AsyncPipe],
  providers: [AccountcreationService, AccountverificationService, AuthGuardService,ProductService,SimulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
