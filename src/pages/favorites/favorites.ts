import { ProductProvider } from './../../providers/product';
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
public products:any[];
public imageUrl : string = "http://104.236.243.55/ProductImage/";  
public heart:string="heart";
  constructor(public navCtrl: NavController,public modalCtrl :ModalController, public navParams: NavParams,public productProvider:ProductProvider) {
    
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad FavoritesPage');
    this.getFavorite();
  }
  addItem(counterEle : any){
   
    console.log(counterEle);
    counterEle.value++;
    }
    removeItem(counterEle : any){
      console.log(counterEle);
      counterEle.value--;
    
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
  getFavorite(){
    this.productProvider.getFav().subscribe((res)=>{
      this.products=res;
      console.log(res);
      console.log(this.products);
    })
  }
  godetails(name :string,weight :number ,price :number ,image : string,description : any){
    this.navCtrl.push(OrderdetailsPage,{name : name,weight : weight,price : price,image : image, description : description});
  }
  changeHeart(iconEle : any){
    if(iconEle.style.color == 'white')
    iconEle.style.color = 'crimson';
    else iconEle.style.color = 'white';
  }
}
