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
    private Url = 'http://localhost:9098/api';
    public current:BehaviorSubject<Customer>;

    constructor(private http: Http, private jwtHelper: JwtHelperService) {
        this.current= new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('user')));
     }

    login(c) {
        return this.http.post(this.Url + '/login', JSON.stringify(c), this.options)
        //projection function
            .pipe(map(response => {
                const payload = response.text() ? response.json() : null;
                //const token = response.headers.get('Token');
                const token = true;
                if (!!payload && !payload.errorCode && token) {
                    //localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(payload));
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


    get loggedinCustomer() {
        return JSON.parse(localStorage.getItem('user'));
    }

}
