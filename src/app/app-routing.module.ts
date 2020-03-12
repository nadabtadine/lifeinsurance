import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { HealthinsuranceComponent } from './products/healthinsurance/healthinsurance.component';
import { IndividualinsuranceComponent } from './products/individualinsurance/individualinsurance.component';
import { EducationalComponent } from './products/educational/educational.component';
import { PropretiesinsuranceComponent } from './products/propretiesinsurance/propretiesinsurance.component';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { Simulation1Component } from './simulation/simulation1/simulation1.component';
import { Simulation3Component } from './simulation/simulation3/simulation3.component';
import { Simulation2Component } from './simulation/simulation2/simulation2.component';
import { Simulation4Component } from './simulation/simulation4/simulation4.component';
import { SimulationresultComponent } from './simulation/simulationresult/simulationresult.component';
import { ShoppingCartComponent } from './customer/shoppingCart/shopppingCart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path:'', component: MenuComponent},
  
  { path:'products/type/1', component: HealthinsuranceComponent},
  { path:'products/type/2', component: IndividualinsuranceComponent},
  { path:'products/type/3', component: EducationalComponent},
  { path:'products/type/4', component: PropretiesinsuranceComponent},
  { path:'products/:id', component: ProductsComponent},
  { path:'products/details/:id', component: ProductDetailsComponent},
  { path:'products', component: ProductsComponent},
  { path:'signin',component: SigninComponent},
  { path:'login' ,component: LoginComponent},
  { path:'shoppingcart' ,component: ShoppingCartComponent},
  { path:'checkout' ,component: CheckoutComponent},
  { path:'order' ,component: InvoiceComponent},
  { path:'invoice' ,component: InvoiceComponent},

  { path:'shoppingcart/:id' ,component: ShoppingCartComponent},
  { path:'checkout/:id' ,component: CheckoutComponent},
  { path:'order/:id' ,component: InvoiceComponent},
  { path:'result/:response' ,component: SimulationresultComponent},
  { path:'invoice/:id' ,component: InvoiceComponent},

  { path:'contactus',component: ContactusComponent},
  { path:'privacypolicy', component: PrivacypolicyComponent},
  { path: 'customer/:id', component: CustomerComponent },
  {path:'simulation/1', component:Simulation1Component},
  {path:'simulation/2', component:Simulation2Component},
  {path:'simulation/3', component:Simulation3Component},
  {path:'simulation/4', component:Simulation4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
