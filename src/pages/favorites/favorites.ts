import { CartPage } from './../cart/cart';
import { FilterPage } from './../filter/filter';
import { SearchPage } from './../search/search';
import { OrderdetailsPage } from './../orderdetails/orderdetails';
import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController} from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  constructor(public navCtrl: NavController,public modalCtrl :ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }
  godetails(){
    this.navCtrl.push(OrderdetailsPage);
  }
  gosearch(){
    let modal = this.modalCtrl.create(SearchPage);
      modal.present();
  }

  gofilter(){
      let modal = this.modalCtrl.create(FilterPage);
      modal.present();
  }

  myCart(){
    this.navCtrl.push(CartPage);
  }
}
