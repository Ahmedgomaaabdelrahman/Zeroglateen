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
  public imageUrl : string = "http://104.236.243.55/ProductImage/";  
  constructor(public userprovider:UserProvider,public product:ProductProvider,public navCtrl: NavController, public navParams: NavParams) {
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
    console.log(this.cartProd);
  });
 }
}
