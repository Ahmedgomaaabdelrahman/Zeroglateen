import { OrderdetailsPage } from './../orderdetails/orderdetails';
import { SearchPage } from './../search/search';
import { FilterPage } from './../filter/filter';
import { SignupPage } from './../signup/signup';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, MenuController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private menuCtrl:MenuController,public modalCtrl :ModalController) {

  }
  ss(){
    this.navCtrl.push(SignupPage);
  }
  gotologin(){
    this.navCtrl.push(LoginPage);
  }
  godetails(){
    this.navCtrl.push(OrderdetailsPage);
  }
  openmenu(){
    this.menuCtrl.toggle();
  }
  gosearch(){
    let modal = this.modalCtrl.create(SearchPage);
      modal.present();
  }

  gofilter(){
      let modal = this.modalCtrl.create(FilterPage);
      modal.present();
  }
}
