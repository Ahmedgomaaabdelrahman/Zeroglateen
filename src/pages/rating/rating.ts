import { ProductProvider } from './../../providers/product';
import { OrdermapPage } from './../ordermap/ordermap';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {  NavController, NavParams ,ViewController} from 'ionic-angular';



@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {
public rateNo:number=0;
public idInvoice:number;
public rating:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController,public productprovider:ProductProvider) {
    console.log(navParams.get('invoiceIdR'));
  }

  ionViewDidLoad() {
    this.getIcons(0);
    console.log('ionViewDidLoad RatingPage');
    this.idInvoice = this.navParams.data.invoiceIdR ;
  }
  dismiss(){
    console.log(this.rating);
    console.log(this.rateNo);
    this.viewCtrl.dismiss();
   //this.navCtrl.push(OrdermapPage); 
    // this.navCtrl.setRoot(HomePage);
  }
 
  iconss:string[];
  customerRate(rateNo : number){
    this.rateNo = rateNo ;
    this.getIcons(rateNo);
    // this.commonService.successToast();
  }
  getIcons(rate : number)
  {
     this.iconss = this.icons(rate);
  }
  public icons(rate : number): string[] {
    let icons = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        icons.push('star');
      }
      else {
        icons.push('star-outline');
      }
    }
    return icons;
  }
Rate(){
  this.productprovider.Rate(this.idInvoice,this.rating,this.rateNo).subscribe((res)=>{
    console.log(res);
  });
}
}
