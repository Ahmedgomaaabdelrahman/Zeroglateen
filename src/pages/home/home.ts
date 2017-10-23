import { CommonProvider } from './../../providers/common';
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
import { UserProvider } from '../../providers/user';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public products :any;
  public imageUrl : string = "http://104.236.243.55/ProductImage/";  
  public counter:number =0 ;
  public heart:boolean=false;
<<<<<<< HEAD
  constructor(public product:ProductProvider,public navCtrl: NavController,
=======
  
  constructor(public common:CommonProvider,public userprovider:UserProvider,public product:ProductProvider,public navCtrl: NavController,
>>>>>>> 719446d97a611a90af176424f09c446528a0db00
    private menuCtrl:MenuController,public modalCtrl :ModalController) {
    this.menuCtrl.swipeEnable(true);
    this.common.presentToast('hello' + this.userprovider.deviceToken);
  }
  ionViewWillEnter()
  {
    this.getProducts();
    
  }
    
  getProducts(){
     this.product.getProducts().subscribe((res)=>{
          console.log(res);
<<<<<<< HEAD
          this.products = res;    
=======
          this.products = res;
          console.log(this.products[0].image);
>>>>>>> 719446d97a611a90af176424f09c446528a0db00
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
  godetails(name :string,weight :number ,price :number ,image : string,description : any){
    this.navCtrl.push(OrderdetailsPage,{name : name,weight : weight,price : price,image : image, description : description});
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
  addtoFav(prodid){
    this.product.addToFav(prodid).subscribe((res)=>{
        console.log(res);
    });
  }
}
