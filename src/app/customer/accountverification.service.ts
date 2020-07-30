import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Headers, RequestOptions } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { Customer } from './customer.model';


@Injectable({
    providedIn: 'root'
  })
export class AccountverificationService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    private Url = 'http://localhost:9092/api';
    public current:BehaviorSubject<Customer>;

    constructor(private http: Http, private jwtHelper: JwtHelperService) {
        this.current= new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('user')));
     }

    login(c) {
        return this.http.post(this.Url + '/login', JSON.stringify(c), this.options)
        //projection function
        // .shareReplay()
            .pipe(map(response => {
                const payload = response.text() ? response.json() : null;
                // const t = response.headers.get('Token');
                const token = true;
                if (!!payload && !payload.errorCode && token) {
                    // localStorage.setItem('token', t);
                    // console.log(t);
                    localStorage.setItem('customer', JSON.stringify(payload));
                    this.current.next(payload);
                    return payload;
                }
                return false;
            }));
    }

    logout() {
        localStorage.clear();
        localStorage.removeItem('user');
        this.current.next(null);
    }
    
    isAuthenticated(): boolean {

        const token = localStorage.getItem('token');
        if (!token) return false;
        const isExpired = this.jwtHelper.isTokenExpired(token);
        return !isExpired;
    }

    get isLoggedIn() {
        const user = localStorage.getItem('user');
        return !!user;
    }


    get loggedinCustomer() {
        return JSON.parse(localStorage.getItem('user'));
    }

    public get currentUserValue(): Customer {
        return this.current.value;
    }

}
