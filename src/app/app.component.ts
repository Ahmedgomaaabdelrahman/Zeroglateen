import { SettingsPage } from './../pages/settings/settings';
import { FavoritesPage } from './../pages/favorites/favorites';
import { CartPage } from './../pages/cart/cart';
import { MyaccountPage } from './../pages/myaccount/myaccount';

import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NavController} from 'ionic-angular';
import {MenuController} from 'ionic-angular';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav:NavController;
  // rootPage:any = HomePage;
  homePage=HomePage;
  myaccountPage=MyaccountPage;
  cartPage=CartPage;
  favoritesPage=FavoritesPage;
  settingsPage=SettingsPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl:MenuController,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page:any){
    this.nav.push(page);
    this.menuCtrl.close();
}
}

