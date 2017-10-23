import { UserProvider } from './user';
import { MainProvider } from './main';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ProductProvider {
public getProductsUrl : string = MainProvider.baseUrl+"product?lang=";
public categoryUrl:string = MainProvider.baseUrl+"category?lang=";
public addFavUrl:string = MainProvider.baseUrl+"setfavorit";

  constructor(public userprovider:UserProvider,public http: Http) {
    console.log('Hello ProductProvider Provider');
  
  }
 
  getProducts(){
    return this.http.get(this.getProductsUrl+MainProvider.lang).map((res)=>res.json());
  }

  category(){
    return this.http.get(this.categoryUrl+MainProvider.lang).map((res) => res.json());
  }

  addToFav(userid,prodid){ 
    let body = {
      user_id : userid,
      product_id:prodid
    };
    return this.http.post(this.addFavUrl,body).map((res) => res.json());
  }
}
