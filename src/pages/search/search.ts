import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
public items:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public productProvider:ProductProvider) {
 
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad SearchPage');
    this.category();
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  category(){
    this.productProvider.category().subscribe((res)=>{
      this.items=res;
      console.log(res);
    })
  }
  
}
