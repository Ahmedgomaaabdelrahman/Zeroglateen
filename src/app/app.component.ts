import { Storage } from '@ionic/storage';
import { CommonProvider } from './../providers/common';
import { UserProvider } from './../providers/user';
import { MainProvider } from './../providers/main';
import { LoginPage } from './../pages/login/login';
import { SigntypesPage } from './../pages/signtypes/signtypes';
import { SignupPage } from './../pages/signup/signup';
import { SettingsPage } from './../pages/settings/settings';
import { FavoritesPage } from './../pages/favorites/favorites';
import { CartPage } from './../pages/cart/cart';
import { MyaccountPage } from './../pages/myaccount/myaccount';
import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController} from 'ionic-angular';
import { MenuController} from 'ionic-angular';
import { TranslateService} from "@ngx-translate/core";

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav:NavController;
  public  MainService =  MainProvider;
  rootPage:any;
  homePage=HomePage;
  myaccountPage=MyaccountPage;
  cartPage=CartPage;
  favoritesPage=FavoritesPage;
  settingsPage=SettingsPage;
  loginPage=LoginPage;
  signupPage=SignupPage;

  constructor(public com:CommonProvider,public user:UserProvider,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl:MenuController,public translate : TranslateService ,public storage:Storage) {
    platform.ready().then(() => {
   
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.user.userStorageGet().then(()=>{
        if(this.user.user != null )
        {
          this.MainService.sideMenu=true;
          this.rootPage = HomePage;
        }else{
          this.MainService.sideMenu=false;
            this.rootPage = HomePage;
          }
      }).catch((err)=>console.log(err));
    });
    this.storage.get('lang').then((res)=>{
      if(res=='ar'){
        platform.setDir('rtl',true);
        MainProvider.lang='ar'
         this.translate.setDefaultLang('ar');
         console.log('arabic');
      }
       else if(res=='en'){
        platform.setDir('ltr',true);
        MainProvider.lang='en'
         this.translate.setDefaultLang('en');
         console.log('english');
      }
      else if(!res){
        if(res=='en'){
          platform.setDir('ltr',true);
          MainProvider.lang='en'
           this.translate.setDefaultLang('en');
           console.log('!reslang');
        }
      }
    });
    // platform.setDir('ltr',true);
    // this.translate.setDefaultLang(MainProvider.lang);
    
  }
  onLoad(page:any){
    this.nav.push(page);
    this.menuCtrl.close();
}
logout(){
  this.user.userStorageErase();
  this.storage.clear();
  this.menuCtrl.close();
  this.menuCtrl.swipeEnable(false);
  this.nav.setRoot(LoginPage);
}
}

