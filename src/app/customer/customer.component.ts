import { Component, OnInit } from '@angular/core';
import { AccountcreationService } from './accountcreation.service';
import{ AccountverificationService} from './accountverification.service'
import { Customer } from './customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{

  current:Customer;
  
  constructor(
  private router:Router,
  private vs: AccountverificationService) {
    this.vs.current.subscribe(x=>this.current=x);
  }
  ngOnInit() {
  }

  logout(){
    this.vs.logout();
    this.router.navigateByUrl("");
  }
}
