import { PaymentPage } from './../payment/payment';
import { RatingPage } from './../rating/rating';
import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController,ModalController } from 'ionic-angular';



@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
public invoice_item:any;
public invoice_created:any;
public invoice_id:any;
public invoice_price:any;
public date: string = new Date().toISOString();
  constructor(public navCtrl: NavController,public modalCtrl :ModalController,public navParams: NavParams,public viewCtrl : ViewController) {
    console.log(navParams.get('invoice'));
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad InvoicePage');
     this.invoice_item=this.navParams.data.invoice[0].item;
    this.invoice_created=this.navParams.data.invoice[0].created_at;
    this.invoice_id=this.navParams.data.invoice[0].order_id;
    this.invoice_price=this.navParams.data.invoice[0].price;
    
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

  goRate(){
    let modal = this.modalCtrl.create(RatingPage,{invoiceIdR:this.invoice_id});
    modal.present();
}
}
