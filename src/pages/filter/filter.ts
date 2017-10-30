import { HomePage } from './../home/home';
import { UserProvider } from './../../providers/user';
import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
// public creted:any;
// public price:any;
// public onsale:any;
public home=HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,public product:ProductProvider,public user:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');  
  }
  dismiss(creted?:any,price?:any,onsale?:any){
    this.viewCtrl.dismiss();
    this.product.Sort(this.user.user.id,creted,price,onsale).subscribe((res)=>{
      console.log(res);
      console.log('sorting');  
      HomePage.sortPro=res;   
      console.log(HomePage.sortPro); 
    });
  }

}
