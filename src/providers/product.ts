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
public setorderUrl:string=MainProvider.baseUrl+"setorder";
public rateUrl:string=MainProvider.baseUrl+"rateandfeedback/";
public userid:any;
  constructor(public userprovider:UserProvider,public http: Http) {
    console.log('Hello ProductProvider Provider');

  
  }
 
  getProducts(){
  console.log("productprovider"+this.userprovider.deviceToken);
   
   let body ;
   if(this.userprovider.user!= null)
   {
     body = {
      user_id : this.userprovider.user.id
     };
   }
   else
   {
     body = {
      
      token_id : this.userprovider.deviceToken
     };
   }
 
    return this.http.get(this.getProductsUrl+body+"?lang="+MainProvider.lang).map((res)=>res.json());
  }

  category(){

    return this.http.get(this.categoryUrl+MainProvider.lang).map((res) => res.json());
  }

  addToFav(prodid){ 
    let body ;
    if(this.userprovider.user!= null)
    {
      body = {
       user_id : this.userprovider.user.id,
       product_id:prodid
      };
    }
    else
    {
      body = {
       token_id : this.userprovider.deviceToken,
       product_id:prodid
      };
    }
    return this.http.post(this.addFavUrl,body).map((res) => res.json());
  }
  deleteFav(Favid){
    return this.http.delete(this.deleteFavUrl+Favid).map((res)=>res.json());
  }
  getFav(){
    let body ;
    if(this.userprovider.user!= null)
    {
      body =  this.userprovider.user.id
    
    }
    else
    {
      body =  this.userprovider.deviceToken
    
    }
  
    return this.http.get(this.getFavUrl+body+"?lang="+ MainProvider.lang).map((res) => res.json());
  }
  addToCart(prodid){
   let body ;
   if(this.userprovider.user!= null)
   {
     body = {
      user_id:this.userprovider.user.id,
      product_id:prodid,
      item_qty:1,
      cart_state:1
     };
   }
   else
   {
     body = {
      token_id : this.userprovider.deviceToken,
      product_id:prodid,
      item_qty:1,
      cart_state:1
     };
   }
   return this.http.post(this.addCartUrl,body).map((res) => res.json());
  }
  getCart()
  {  let body ;
    if(this.userprovider.user!= null)
    {
      body =  this.userprovider.user.id
    
    }
    else
    {
      body =  this.userprovider.deviceToken
    
    }
  

    return this.http.get(this.getCartUrl+body+"?lang="+ MainProvider.lang).map((res) => res.json());
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
  getSearch(categroyid){
    let body ;
    if(this.userprovider.user!= null)
    {
      body =  this.userprovider.user.id
    
    }
    else
    {
      body =  this.userprovider.deviceToken
    
    }
  
    return this.http.get(this.searchUrl+categroyid+"/"+body+"?lang="+ MainProvider.lang).map((res) => res.json());
    
  }
Sort(creted?:any,price?:any,onsale?:any){
  let body ;
  if(this.userprovider.user!= null)
  {
    body =  this.userprovider.user.id
  
  }
  else
  {
    body =  this.userprovider.deviceToken
  
  }
  let bodyitem = {
    created_at:creted,
    price:price,
    onsale:onsale
  };
  return this.http.post(this.sortUrl+body+"?lang="+ MainProvider.lang,bodyitem).map((res) => res.json());
}
setOrder(userid,address:any,lat:any,lang:any,paymentId:any,orderhistory:any,time?:any,date?:any,feedback?:any,rate?:any){
  let body = {
    user_id:userid,
    adress:address,
    lat:lat,
    lang:lang,
    order_history_state:orderhistory,
    time:time,
    date:date,
    payment_id:paymentId,
    feedback:feedback,
    rate:rate
  };
  return this.http.post(this.setorderUrl,body).map((res) => res.json());  
}
Rate(orderid,feedback,rate){
  let body={
    feedback:feedback,
    rate:rate
  }
  return this.http.put(this.rateUrl+orderid,body).map((res) => res.json());
  
}
}
