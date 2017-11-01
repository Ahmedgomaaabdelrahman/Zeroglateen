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
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    this.getIcons(0);
    console.log('ionViewDidLoad RatingPage');
  }
  dismiss(){
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
}
