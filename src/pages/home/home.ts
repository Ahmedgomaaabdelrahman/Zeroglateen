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

 import { AngularFireDatabase } from 'angularfire2/database';

 import  firebase from 'firebase';

 declare var FCMPlugin;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public products :any;
  public static searchPro :any;
  public static sortPro :any;
  public imageUrl : string = "http://104.236.243.55/ProductImage/";
  public qauntity : number;
  public cartNo : number ;
  public myvar : number ;
  public cartpage :CartPage;
  public cartLength :any[];
  public heart:string;
  public found : boolean = true;
   firestore = firebase.database().ref('/pushtokens');
   firemsg = firebase.database().ref('/messages');
  constructor(public common:CommonProvider,public userprovider:UserProvider,public product:ProductProvider,public navCtrl: NavController,
    private menuCtrl:MenuController,public modalCtrl :ModalController
     ,public afd: AngularFireDatabase
  ) {
    this.menuCtrl.swipeEnable(true);
     this.tokensetup().then((token) => {
       this.storetoken(token);
     })
    this.products=HomePage.sortPro;
    
    
     this.common.traslateandToast('hello' + this.userprovider.deviceToken);
  }
  ionViewWillEnter()
  {
  this.getProducts();
  this.cartNo = CommonProvider.cartNo;
  this.getcart();
  console.log(this.qauntity);

  }
  ionViewDidLoad() {
    FCMPlugin.onNotification(function(data){
     if(data.wasTapped){
       //Notification was received on device tray and tapped by the user.
       alert( JSON.stringify(data) );
     }else{
       //Notification was received in foreground. Maybe the user needs to be notified.
       alert( JSON.stringify(data) );
     }
     });
 
 FCMPlugin.onTokenRefresh(function(token){
    // alert( token );
 });    
  }
 
   tokensetup() {
     var promise = new Promise((resolve, reject) => {
       FCMPlugin.getToken(function(token){
     resolve(token);
       }, (err) => {
         reject(err);
 });
     })
     return promise;
   }
 
  storetoken(t) {
    // this.afd.list(this.firestore).push({
    //   // uid: firebase.auth().currentUser.uid,
    //   devtoken: t
        
    // }).then(() => {
       // alert(t);
     
this.userprovider.deviceToken=t;
console.log(this.userprovider.deviceToken);
      // });
    this.afd.list(this.firemsg).push({
      sendername: firebase.auth().currentUser.displayName,
      message: 'hello'
    }).then(() => {
      alert('Message stored');
      });  
}

  icons:any[];
  getProducts(){
    console.log("search:"+HomePage.searchPro);
    console.log("fdgfdsgdf"+HomePage.sortPro);
     this.product.getProducts().subscribe((res)=>{
      console.log(res);
      this.products = res;
      console.log(this.products[0].image);
      this.icons=[];
      let self=this;
      for(let i=0;i<res.length;i++){
        if(res[i].favourit.length > 0)
        {
        self.icons.push('heart');
        }
        else
        {
        self.icons.push('heart-outline'); 
    }}
     });
    
   }
  addItem(counterEle : any){
    // this.counter++;
    console.log(counterEle);
    counterEle.value++;
  }
  removeItem(counterEle : any){
    console.log(counterEle);
    counterEle.value--;
    if(counterEle.value < 0)
    document.getElementById("remove").style.pointerEvents = "none";
    // else 
    // this.counter--;
  }
  addToCart(prodid,mycounter){
    this.product.addToCart(prodid).subscribe((res)=>{
      if(res.state == "203"){
        this.common.traslateandToast("Already added before");
        
      }
      else if(res.state == "202"){
          this.common.traslateandToast("added successfully");
          this.cartNo++;
          mycounter.value++;
      }
   });
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
 

  addtoFav(prodid,icon){
  
      this.product.addToFav(prodid).subscribe((res)=>{
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
  ss(){
    this.navCtrl.push(SignupPage);
  }
  gotologin(){
    this.navCtrl.push(LoginPage);
  }
  godetails(name :string,
            weight :number ,
            price :number ,
            image : string,
            description : any,
            itemNo:any,
            icon:any,
            proId:number,
            favId:number){
    this.navCtrl.push(OrderdetailsPage,{name : name,weight : weight,
                                        price : price,image : image,
                                        description : description,itemNo:itemNo,icon:icon,proId:proId,favId:favId});
  }
  gosearch(){
    this.products=HomePage.searchPro;
    let modal = this.modalCtrl.create(SearchPage);
      modal.present();
  }

  gofilter(){
    this.products=HomePage.sortPro;
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
  getcart(){
    this.product.getCart().subscribe((res)=>{
      this.cartLength = res;
      this.cartNo = this.cartLength.length;
      CommonProvider.cartNo = this.cartLength.length;
    });
   }
}
