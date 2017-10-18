import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainProvider {
  public static baseUrl : string = "http://104.236.243.55/api/";
  public static  lang : string = 'en';
  
  constructor(public http: Http) {
    console.log('Hello MainProvider Provider');
  }
   
}
