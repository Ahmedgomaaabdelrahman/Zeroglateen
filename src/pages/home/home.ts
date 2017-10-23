import { ProductProvider } from './../../providers/product';
import { CartPage } from './../cart/cart';
import { OrdermapPage } from './../ordermap/ordermap';
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
  public products :any [];
  public imageUrl : string = "http://104.236.243.55/ProductImage/";  
  public counter:number =0 ;
  public heart:boolean=false;
  constructor(public product:ProductProvider,public navCtrl: NavController,
    private menuCtrl:MenuController,public modalCtrl :ModalController) {
    this.menuCtrl.swipeEnable(true);
    this.getProducts();
  
  }

   getProducts(){
     this.product.getProducts().subscribe((res)=>{
          console.log(res);
          this.products = res;    
     });
   }
  addItem(){
  this.counter++;
}
removeItem(){
if(this.counter!=0)
  this.counter--;
  else
  this.counter=0;
}
changeHeart(){
  if(this.heart==false){
    this.heart=true;
  }
  else if(this.heart==true){
    this.heart=false;
  }
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
  openmenu(){
    this.menuCtrl.toggle();
  }
 
  gomap(){
    this.navCtrl.push(OrdermapPage);
  }
}
