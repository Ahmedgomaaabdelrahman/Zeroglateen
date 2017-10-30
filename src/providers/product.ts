import { UserProvider } from './user';
import { MainProvider } from './main';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ProductProvider {
public getProductsUrl : string = MainProvider.baseUrl+"product/";
public categoryUrl:string = MainProvider.baseUrl+"category?lang=";
public addFavUrl:string = MainProvider.baseUrl+"setfavorit";
public deleteFavUrl:string=MainProvider.baseUrl+"deletefavorit/";
public getFavUrl:string=MainProvider.baseUrl+"getfav/"
public addCartUrl :string = MainProvider.baseUrl+"cart";
public getCartUrl :string = MainProvider.baseUrl+"getcart/";
public addItemUrl : string = MainProvider.baseUrl+"modifayitiem/";
public deleteCartUrl : string =MainProvider.baseUrl+"deletecart/";
public searchUrl:string=MainProvider.baseUrl+"search/";
public sortUrl:string=MainProvider.baseUrl+"filter/";
public userid:any;
  constructor(public userprovider:UserProvider,public http: Http) {
    console.log('Hello ProductProvider Provider');
  
  }
 
  getProducts(){
    return this.http.get(this.getProductsUrl+this.userprovider.user.id+"?lang="+MainProvider.lang).map((res)=>res.json());
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
  addToCart(userid,prodid){
   let body = {
    user_id:userid,
    product_id:prodid,
    item_qty:1,
    cart_state:1
   };
   return this.http.post(this.addCartUrl,body).map((res) => res.json());
  }
  getCart(userid)
  {
    return this.http.get(this.getCartUrl+userid+"?lang="+ MainProvider.lang).map((res) => res.json());
  }

  increaseItem(quantity,cartid){
    let qaun = {
      item_qty : quantity,
    }
    return this.http.put(this.addItemUrl+cartid,qaun).map((res) => res.json());
  }

  deleteCart(cartid){
    return this.http.delete(this.deleteCartUrl+cartid).map((res) => res.json());
  }
  getSearch(categroyid,userid){
    return this.http.get(this.searchUrl+categroyid+"/"+userid+"?lang="+ MainProvider.lang).map((res) => res.json());
    
  }
Sort(userid,creted?:any,price?:any,onsale?:any){
  let body = {
    created_at:creted,
    price:price,
    onsale:onsale
  };
  return this.http.post(this.sortUrl+userid+"?lang="+ MainProvider.lang,body).map((res) => res.json());
  
}
}
