import { CommonProvider } from './../../providers/common';
import { ProductProvider } from './../../providers/product';
import { CartPage } from './../cart/cart';
import { FilterPage } from './../filter/filter';
import { SearchPage } from './../search/search';
import { OrderdetailsPage } from './../orderdetails/orderdetails';
import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController} from 'ionic-angular';




@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
public products:any;
public imageUrl : string = "http://104.236.243.55/ProductImage/";  
public heart:string="heart";
public productid:any;
  constructor(public navCtrl: NavController,public modalCtrl :ModalController, public navParams: NavParams,public productProvider:ProductProvider,public common:CommonProvider) {
   
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
   icons:any;
  getFavorite(){
    this.productProvider.getFav().subscribe((res)=>{
      this.icons=[];
      let self=this;
      for(let i=0;i<res.length;i++){
        self.icons.push('heart');
        }
      this.products=res;
   
      console.log(res);
    })
  }
  godetails(name :string,weight :number ,price :number ,image : string,description : any){
    this.navCtrl.push(OrderdetailsPage,{name : name,weight : weight,price : price,image : image, description : description});
  }
  changeHeart(iconEle : any){
    console.log(iconEle);
    if(this.icons[iconEle]=='heart-outline'){
      this.icons[iconEle]='heart'
    }else if(this.icons[iconEle]=='heart')
    {
      this.icons[iconEle]='heart-outline'
    
    }
    
  }
  deleteFav(iconEle : any,Favid){
    this.productProvider.deleteFav(Favid).subscribe((res)=>{
    console.log(res);
    if(res.state == "202"){
      this.changeHeart(iconEle);
      this.products = this.products.filter((item) => {
        if(item.favourite_id == Favid)
        {
          this.products -= item.favourite_id;
        }
        return (item.favourite_id != Favid);
      });

      this.common.traslateandToast("Removed successfully"); 
    }
    else{
    console.log(res);
    }
    });
  }
}
