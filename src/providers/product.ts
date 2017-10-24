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
public deleteFavUrl:string=MainProvider.baseUrl+"deletefavorit/";
public getFavUrl:string=MainProvider.baseUrl+"getfav/"
public addCartUrl :string = MainProvider.baseUrl+"cart";
public getCartUrl :string = MainProvider.baseUrl+"getcart/";
public userid:any;
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
  deleteFav(Favid){
    return this.http.delete(this.deleteFavUrl+Favid).map((res)=>res.json());
  }
  getFav(){
    return this.http.get(this.getFavUrl+this.userprovider.user.id+"?lang="+ MainProvider.lang).map((res) => res.json());
  }
  addToCart(userid,prodid,qauntity){
   let body = {
    user_id:userid,
    product_id:prodid,
    item_qty:qauntity,
    cart_state:1
   };
   return this.http.post(this.addCartUrl,body).map((res) => res.json());
  }
  getCart(userid)
  {
    return this.http.get(this.getCartUrl+userid+"?lang="+ MainProvider.lang).map((res) => res.json());
  }
}
