import { CommonProvider } from './../../providers/common';
import { UserProvider } from './../../providers/user';
import { AddlocationPage } from './../addlocation/addlocation';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from './../../providers/product';



@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public cartProd :any;
  public cartLength :any[];
  public quantity:number;
  public cartNo :number;
  public found:boolean = false;
  public imageUrl : string = "http://104.236.243.55/ProductImage/";  
  constructor(public common:CommonProvider,public userprovider:UserProvider,public product:ProductProvider,public navCtrl: NavController, public navParams: NavParams) {
    CommonProvider.cartNo = this.cartNo;
  }
  ionViewWillEnter(){
    this.getcart();
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  
  }
 golocation(){
   this.navCtrl.push(AddlocationPage);
 }
 getcart(){
  this.product.getCart(this.userprovider.user.id).subscribe((res)=>{
    this.cartProd = res;
    this.cartLength = res;
    this.cartNo = this.cartLength.length;
    CommonProvider.cartNo = this.cartLength.length;
    console.log(this.cartProd);
  });
 }
 addItem(cardid,counterEle : any){
  // this.counter++;
  console.log(counterEle);
  counterEle.value++;
  this.increaseItem(counterEle.value,cardid);
  
}
removeItem(cardid,counterEle : any){
  console.log(counterEle);
  counterEle.value--;
 
  if(counterEle.value < 1){
    document.getElementById('remove').style.pointerEvents = 'none';
    this.deleteCart(cardid);
    this.cartNo--;
  }
  else{
    this.increaseItem(counterEle.value,cardid);
  }
  CommonProvider.cartNo = this.cartNo;
  
 
}
increaseItem(quan,cartid){
  this.product.increaseItem(quan,cartid).subscribe((res)=>{
      console.log(res);
  });
}
deleteCart(cartid){
  this.product.deleteCart(cartid).subscribe((res)=>{
    console.log(res);
    if(res.state == "202"){
      this.cartProd = this.cartProd.filter((item) => {
        if(item.cart_id == cartid)
        {
          this.cartProd -= item.cart_id;
  
        }
  
        return (item.cart_id != cartid);
      })
    }
});
}
}
