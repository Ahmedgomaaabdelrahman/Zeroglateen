import { NativeStorage } from '@ionic-native/native-storage';
import { AboutPage } from './../about/about';
import { TermsPage } from './../terms/terms';
import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {MainProvider} from "../../providers/main";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public toggleStatus:any;
  public MainProvider = MainProvider;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private translate: TranslateService,
              public platform: Platform,
              public storage:NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  goterms(){
    this.navCtrl.push(TermsPage);
  }
  goabout(){
    this.navCtrl.push(AboutPage);
  }
  Change_Toggle(type) {
    this.translate.setDefaultLang(type);
    this.storage.setItem('lang',type);
    MainProvider.lang = type;
    if(type == 'ar'){
      this.platform.setDir('rtl', true);
    console.log(type);
    console.log("arabic");
    }
    else
    {
      this.platform.setDir('ltr', true);
      console.log(type);
      console.log("English");
    }
  }
}
