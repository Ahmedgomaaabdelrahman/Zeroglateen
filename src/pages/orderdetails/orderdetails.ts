import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage {
  public counter:number =0 ;
  public heart:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailsPage');
  }
  addItem(){
    this.counter++;
  }
  removeItem(){
  if(this.counter!=0)
    this.counter--;
    else
    this.counter=0;
  }
  changeHeart(){
    if(this.heart==false){
      this.heart=true;
    }
    else if(this.heart==true){
      this.heart=false;
    }
  }
}
