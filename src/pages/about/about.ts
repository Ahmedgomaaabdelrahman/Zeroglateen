import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
public aboutText:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public productprovider:ProductProvider) {
    this.about();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
about(){
  this.productprovider.aboutAndTerms().subscribe((res)=>{
console.log(res);
console.log(res[0].about);
this.aboutText=res[0].about;

  });
}
}
