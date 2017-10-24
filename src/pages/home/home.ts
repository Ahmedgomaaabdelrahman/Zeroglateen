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
  public heart:string="heart";
  constructor(public common:CommonProvider,public userprovider:UserProvider,public product:ProductProvider,public navCtrl: NavController,
    private menuCtrl:MenuController,public modalCtrl :ModalController) {
    this.menuCtrl.swipeEnable(true);
    this.common.traslateandToast('hello' + this.userprovider.deviceToken);
  }
  ionViewWillEnter()
  {
    this.getProducts();
   
  }
  
  icons:any;
  getProducts(){
     this.product.getProducts().subscribe((res)=>{
      console.log(res);
      this.products = res;
      console.log(this.products[0].image);
      this.icons=[];
      let self=this;
      for(let i=0;i<res.length;i++){
        self.icons.push('heart-outline');
        }
      this.products=res;
      console.log(res); 
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
    if(counterEle.value = 0)
    document.getElementById("remove").style.pointerEvents = "none";
    else 
    this.counter--;

  }
  changeHeart(iconEle : any){
    console.log(iconEle);
    if(this.icons[iconEle]=='heart'){
      this.icons[iconEle]='heart-outline'
    }
    else if(this.icons[iconEle]=='heart-outline')
    {
      this.icons[iconEle]='heart'
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

  addToCart(prodid,counter){
        this.product.addToCart(this.userprovider.user.id,prodid,this.qauntity).subscribe((res)=>{
          if(res.state == "203"){
            this.common.traslateandToast("Product Quantity is Updated");
          }
          else if(res.state == "202")
          this.common.traslateandToast("added successfully");
          this.addItem(counter);
       });
     
  }
}
