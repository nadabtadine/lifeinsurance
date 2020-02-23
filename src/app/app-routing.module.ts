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



const routes: Routes = [
  { path:'', component: MenuComponent},
  
  { path:'products/:id', component: ProductsComponent},
  { path:'products', component: ProductsComponent},
  { path:'signin',component: SigninComponent},
  { path:'login' ,component: LoginComponent},
  { path:'contactus',component: ContactusComponent},
  { path:'privacypolicy', component: PrivacypolicyComponent},
  { path: 'customer/:id', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
