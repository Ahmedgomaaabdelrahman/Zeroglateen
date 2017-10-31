import { CommonProvider } from './../../providers/common';
import { MapPage } from './../map/map';
import { PaymentPage } from './../payment/payment';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-addlocation',
  templateUrl: 'addlocation.html',
})
export class AddlocationPage {
   public map = MapPage;
   public address:string;
   public date:any;
   public time:any;
   public lat:any;
   public lng:any;
   public cartNo :number;
   public radiobuttons:number=1;
  constructor(public navCtrl: NavController, public navParams: NavParams,public common:CommonProvider) {
   this.cartNo=CommonProvider.cartNo;
  }

  ionViewWillEnter(){
    console.log(this.map.lat);
    console.log(this.map.lng);
                this.lat=this.map.lat;
                this.lng=this.map.lng;
                console.log(this.lat);
  }
  gopay(address:string,ordertype:number,date:any,time:any,lat:any,lng:any){
    this.navCtrl.push(PaymentPage,{
                                   address:address,ordertype:ordertype,date:date,time:time,lat:this.map.lat,lng:this.map.lng});
  }
  getMap(){
    this.navCtrl.push(MapPage);
  }
  
}
