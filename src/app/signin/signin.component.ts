import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountcreationService } from '../customer/accountcreation.service';
import { Customer } from '../customer/customer.model';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'signin.component.html',
  styleUrls: ['./signin.component.css']})
export class SigninComponent implements OnInit {
  registerForm: FormGroup;
  
  @Input() customer: Customer;
  customers: Customer[];

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cs.getCustomer(id)
      .subscribe(customer => this.customer = customer);
  }

  add(name: string, age:number, gender: string, address: string, phone_number: string, email: string, username:string,password:string): void {
    name = name.trim();
    age=age;
    address = address.trim();
    gender = gender.trim();
    phone_number = phone_number.trim();
    email = email.trim();
    username = username.trim();
    password = password.trim();

    if (!name && !email) {
      return;
    }
    this.cs.register({ name, age, gender, address, phone_number, email, username, password } as unknown  as Customer)
      .subscribe( () => this.back());
      this.router.navigateByUrl("");
   }

   back(): void {
    this.router.navigateByUrl("");
  }
    constructor(
        private titleService: Title,
        private formBuilder: FormBuilder,
        private cs: AccountcreationService,
        private router: Router,
        private route: ActivatedRoute)
        
    { this.titleService.setTitle('Life Insurance | Signin');
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age:[''],
        gender:[''],
        email:['', Validators.required],
        phone:[''],
        address:[''],
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    }

    ngOnInit() {
      //
    }

    // onSubmit() {
      
    //     this.cs.register(this.registerForm.value)
    //     .subscribe(
    //       res => {
    //         console.log("success");
    //         this.router.navigateByUrl("/login");
    //       },
    //       err=>{
    //         console.log("fail");
    //       }
    //     );
            
    // }
}