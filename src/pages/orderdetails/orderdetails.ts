import { CartPage } from './../cart/cart';
import { ProductProvider } from './../../providers/product';
import { CommonProvider } from './../../providers/common';
import { UserProvider } from './../../providers/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage {
  public counter:number =0 ;
  public prod_name :string;
  public prod_image : string;
  public prod_price : number;
  public prod_weight : number;
  public prod_description : string;
  public heart:boolean=false;
  public prod_itemNo:any;
  public prod_heart:any;
  public prod_id:any;
  public fav_id:number;
  public favoritId:number;
  public count:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userprovider:UserProvider,public common:CommonProvider,public product:ProductProvider) {
    this.getcart();
    
    
  }
  ionViewWillEnter()
  {
    this.prod_name = this.navParams.data.name ;
    this.prod_image = this.navParams.data.image;
    this.prod_price = this.navParams.data.price;
    this.prod_weight = this.navParams.data.weight;
    this.prod_itemNo =this.navParams.data.itemNo;
    this.prod_heart=this.navParams.data.icon;
    this.prod_id=this.navParams.data.proId;
    this.fav_id=this.navParams.data.favId;
    this.prod_description = this.navParams.data.description;
   console.log(this.fav_id);
   console.log("prodId= "+this.prod_id);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailsPage');
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
    if(this.prod_heart=='heart'){
      this.deleteFav();
      this.prod_heart='heart-outline';
    }
    else if( this.prod_heart='heart-outline'){
      this.addtoFav();
      this.prod_heart='heart'
    }
  }
  getFavorite(){
    this.product.getFav().subscribe((res)=>{
      console.log(res);
      for(let i=0;i <= res.length ;i++){
        if(res[i]!=null){
          this.favoritId=res[i].favourite_id;
          console.log(this.favoritId);
        }
        else{
          console.log('not');
        }
      }
    });
  }
  addtoFav(){
 
      this.product.addToFav(this.prod_id).subscribe((res)=>{
        console.log(res);
        if(res.state == "202"){
          this.common.traslateandToast("added successfully");
          this.getFavorite();
        }
        else if(res.state == "203"){
          this.common.traslateandToast("Already added before");
          this.getFavorite();
        }
    });
    
  }
  deleteFav(){
  
    if(this.fav_id<=0){
      this.fav_id=this.favoritId;
    }

    this.product.deleteFav(this.fav_id).subscribe((res)=>{
    console.log(res);
    if(res.state == "202"){
      this.common.traslateandToast("Removed successfully"); 
    }
    else{
    console.log(res);
    }
    });
   
  }
  gocart(){
    this.navCtrl.push(CartPage);
  }

  addToCart(){
    this.product.addToCart(this.prod_id).subscribe((res)=>{
      if(res.state == "203"){
        this.common.traslateandToast("Already added before");
  
      }
      else if(res.state == "202"){
          this.common.traslateandToast("added successfully");
         
      }
   });
}
getcart(){
  this.product.getCart().subscribe((res)=>{
    console.log(res);
    console.log(res[0].product_id);
    for(let i=0;i<=res.length;i++){
      if(res[i].product_id==this.prod_id){
      this.count=res[i].item_qty;
      }
      else
      {
      this.count=0;
    }
  }
   
  });
 }
}
