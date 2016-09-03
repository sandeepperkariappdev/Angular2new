import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Hero} from './Hero';

@Injectable()
export class PaymentService {     
    payments:Array<any>;
    constructor(private http:Http) {
        this.payments = [
            { age: 40, name: 'Jordan Houston' },
            { age: 23, name: 'Josh Beh' },
            { age: 23, name: 'Joseph Canina' },
            { age: 24, name: 'Alexandra Wilkins' },
            { age: 22, name: 'Kiersten Costanzo' },
            { age: 23, name: 'Ku Sherwood' },
            { age: 25, name: 'Arta Halili' },
            { age: 21, name: 'Patrick Cooney' },
            { age: 21, name: 'Z.A. Perr' },
            { age: 18, name: 'Tyler Mulligan' },
            { age: 26, name: 'Dennis Dempsey' },
            { age: 32, name: 'Francis Yeager' },
            { age: 23, name: 'Phil Belardi' },
            { age: 25, name: 'Bryan Roman' }
        ];
    }
    getPayments():Observable<Hero[]> {
     //   return this.payments;
      return this.http.get('app/heroes.json').map(this.extractData).catch(this.handleError);
    }
     private extractData(res:Response){
        let body = res.json();
        return body.data || {};
    }
    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
    }
     sendData(name:string):Observable<Hero>{
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('app/heroes.json', body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
}