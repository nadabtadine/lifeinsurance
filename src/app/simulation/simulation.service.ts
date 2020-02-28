  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SimulationService {
    private Url ='http://localhost:9095/api3';
    data:any;
    constructor( private http :HttpClient) {}
    
    post1(s) {
        return this.http.post(this.Url + `/simulation1`, s);
    }
    post2(s) {
        return this.http.post(this.Url + `/simulation2`, s);
    }
    post3(s) {
        return this.http.post(this.Url + `/simulation3`, s);
    }
    post4(s) {
        return this.http.post(this.Url + `/simulation4`, s);
    }
}