import { ProductProvider } from './../../providers/product';
import { CommonProvider } from './../../providers/common';
import { UserProvider } from './../../providers/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


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
  public prod_id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userprovider:UserProvider,public common:CommonProvider,public product:ProductProvider) {
   
    
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
    this.prod_description = this.navParams.data.description;
   
   console.log(this.prod_id);
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
      this.prod_heart='heart-outline';
    }
    else if( this.prod_heart='heart-outline'){
      this.prod_heart='heart'
    }
  }
  addtoFav(prodid){
    if(this.userprovider.user.id){
      this.product.addToFav(this.userprovider.user.id,prodid).subscribe((res)=>{
        console.log(res);
        if(res.state == "202"){
          this.common.traslateandToast("added successfully");
       
        }
        else if(res.state == "203"){
          this.common.traslateandToast("Already added before");
        }
    });
    }
  }
}
