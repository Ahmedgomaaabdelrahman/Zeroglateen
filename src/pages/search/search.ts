import { HomePage } from './../home/home';
import { UserProvider } from './../../providers/user';
import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage  {
public items:any[];
public search:any;
public home=HomePage;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl:ViewController,
     public productProvider:ProductProvider,
    public userprovider:UserProvider) {
 
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad SearchPage');
    this.category();

  }
  dismiss(category){
    this.viewCtrl.dismiss();
    this.productProvider.getSearch(category,this.userprovider.user.id).subscribe((res)=>{
    console.log(res);
    this.search=res;
    HomePage.searchPro=res;
    });
  }
  category(){
    this.productProvider.category().subscribe((res)=>{
      this.items=res;
      console.log(res);
    })
  }
 
}
