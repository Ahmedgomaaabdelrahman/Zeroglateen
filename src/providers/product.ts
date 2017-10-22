import { MainProvider } from './main';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

<<<<<<< HEAD

@Injectable()
export class ProductProvider {
  public getProductsUrl : string = MainProvider.baseUrl+"product?lang=";
=======
@Injectable()
export class ProductProvider {
public categoryUrl:string=MainProvider.baseUrl+"category?lang=";
>>>>>>> 3b255177c3b443fa4ce229ea24cec224aa4e4403
  constructor(public http: Http) {
    console.log('Hello ProductProvider Provider');
  
  }
 
  getProducts(){
    return this.http.get(this.getProductsUrl+MainProvider.lang).map((res)=>res.json());
  }
<<<<<<< HEAD
=======

  category(){
    
    return this.http.get(this.categoryUrl+MainProvider.lang).map((res) => res.json());
  }
>>>>>>> 3b255177c3b443fa4ce229ea24cec224aa4e4403
}
