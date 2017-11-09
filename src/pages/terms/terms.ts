import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
public termsText:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public productprovider:ProductProvider) {
    this.terms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }
  terms(){
    this.productprovider.aboutAndTerms().subscribe((res)=>{
      console.log(res);
      console.log(res[0].terms);
      this.termsText=res[0].terms;
        });
  }
}
