import { UserProvider } from './../../providers/user';
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


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public products :any;
  public imageUrl : string = "http://104.236.243.55/ProductImage/";  
  public counter:number =0 ;
  public qauntity : number;
  public heart:boolean=false;
  public quantity:number;
  public cartNo : number ;
  public cartpage :CartPage;
  constructor(public common:CommonProvider,public userprovider:UserProvider,public product:ProductProvider,public navCtrl: NavController,
    private menuCtrl:MenuController,public modalCtrl :ModalController) {
    this.menuCtrl.swipeEnable(true);
    this.cartNo = CommonProvider.cartNo;
    this.common.traslateandToast('hello' + this.userprovider.deviceToken);
  }
  ionViewWillEnter()
  {
    this.getProducts();
    this.cartNo = CommonProvider.cartNo;
    this.cartpage.getcart();
  }
    
  getProducts(){
     this.product.getProducts().subscribe((res)=>{
          console.log(res);
          this.products = res;
          console.log(this.products[0].image);
     });
   }
  addItem(counterEle : any){
    this.counter++;
    console.log(counterEle);
    counterEle.value++;
  }
  removeItem(counterEle : any){
    console.log(counterEle);
    counterEle.value--;
    this.counter--;
  }
  addToCart(prodid,counter){
    this.product.addToCart(this.userprovider.user.id,prodid).subscribe((res)=>{
      if(res.state == "203"){
        // this.product.increaseItem(this.qauntity,this.cart)
        this.common.traslateandToast("Product Quantity is Updated");
      }
      else if(res.state == "202"){
        this.common.traslateandToast("added successfully");
        this.cartNo++;
        this.addItem(counter);
      }
     
   });
}
  changeHeart(iconEle : any){
    if(iconEle.style.color == 'crimson')
    iconEle.style.color = 'white';
    else iconEle.style.color = 'crimson';
  }
 

  addtoFav(prodid,icon){
    if(this.userprovider.user.id){
      this.product.addToFav(this.userprovider.user.id,prodid).subscribe((res)=>{
        console.log(res);
        if(res.state == "202"){
          this.common.traslateandToast("added successfully");
          this.changeHeart(icon);
        }
        else if(res.state == "203"){
          this.common.traslateandToast("Already added before");
        }
    });
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
}
