import { MainProvider } from './main';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ProductProvider {
public getProductsUrl : string = MainProvider.baseUrl+"product?lang=";
public categoryUrl:string=MainProvider.baseUrl+"category?lang=";
  constructor(public http: Http) {
    console.log('Hello ProductProvider Provider');
  
  }
 
  getProducts(){
    return this.http.get(this.getProductsUrl+MainProvider.lang).map((res)=>res.json());
  }

  category(){
    
    return this.http.get(this.categoryUrl+MainProvider.lang).map((res) => res.json());
  }
}
