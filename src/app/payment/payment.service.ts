import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Hero} from './Hero';

@Injectable()
export class PaymentService {     
    
    constructor(private http:Http) {
       
    }
    getPayments():Observable<Hero[]> {
     
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