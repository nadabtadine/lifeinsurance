import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AccountverificationService } from '../customer/accountverification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any;
  valid = true;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private authService: AccountverificationService,
    private router: Router,
    private route: ActivatedRoute) {
    this.titleService.setTitle('Life Insurance | Login');
  }

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  login(form: NgForm) {
    this.authService.login(form.value) 
      .subscribe(
        response => {
          if (response) {
            this.valid=true;
            this.router.navigateByUrl("/customer/" + response.id);
          } 
          else{this.valid=false;}
        });
      
  }
}

