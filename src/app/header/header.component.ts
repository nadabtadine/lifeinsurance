import { Component, OnInit } from '@angular/core';
import { AccountverificationService } from '../customer/accountverification.service';
import { ThrowStmt } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../customer/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  customer$: BehaviorSubject<Customer> = new BehaviorSubject(null);

  constructor(private accountVerificationService: AccountverificationService, private router: Router) { }

  ngOnInit() {
    this.customer$ = this.accountVerificationService.current;
  }

  logout() {
    this.accountVerificationService.logout();
    this.router.navigateByUrl("");
  }

 



}
