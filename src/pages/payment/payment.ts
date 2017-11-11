import { HomePage } from './../home/home';
import { CommonProvider } from './../../providers/common';
import { ProductProvider } from './../../providers/product';
import { UserProvider } from './../../providers/user';
import { TranslateService } from '@ngx-translate/core';
import { OrdermapPage } from './../ordermap/ordermap';
import { InvoicePage } from './../invoice/invoice';
import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController } from 'ionic-angular';



@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
public flag:boolean =false;
public cartNo:number;
public user_address:string;
public user_ordertype:number;
public user_time:any;
public user_date:any;
public user_lat:any;
public user_lng:any;
public paymentId:number=1;
public invoice:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl :ModalController,
              public translate:TranslateService,
              public userprovider:UserProvider,
              public productprovider:ProductProvider ) {
                this.cartNo=CommonProvider.cartNo;
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad PaymentPage');
    this.user_address = this.navParams.data.address ;
    this.user_ordertype = this.navParams.data.ordertype;
    this.user_time = this.navParams.data.time ;
    this.user_date = this.navParams.data.date ;
    this.user_lat = this.navParams.data.lat ;
    this.user_lng = this.navParams.data.lng;
    console.log("address"+this.user_address);
    console.log("oredertype"+this.user_ordertype);
    console.log("time"+this.user_time);
    console.log("date"+this.user_date);
    console.log("late"+this.user_lat);
    console.log("lng"+this.user_lng);
  }
  goinvoice(){
    if(this.flag === false){
      let modal = this.modalCtrl.create(InvoicePage,{invoice:this.invoice});
      modal.present();
      this.flag = true;
      this.translate.get('Main').subscribe(
      value => {
      document.getElementById('btn').textContent =value;
        });
    }
    else if(this.flag == true){    
      this.navCtrl.setRoot(HomePage);
      this.flag = false;
    }
}
SetOrder(){
  this.productprovider.setOrder(this.userprovider.user.id,
                                this.user_address,
                                this.user_lat,this.user_lng,
                                this.paymentId,this.user_ordertype,this.user_time,this.user_date).subscribe((res)=>{
    console.log(res);
    this.invoice=res;
    console.log(this.invoice);
    this.goinvoice();
  });
}
}
