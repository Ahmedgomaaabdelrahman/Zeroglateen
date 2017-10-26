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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    
  }
  ionViewWillEnter()
  {
    this.prod_name = this.navParams.data.name ;
    this.prod_image = this.navParams.data.image;
    this.prod_price = this.navParams.data.price;
    this.prod_weight = this.navParams.data.weight;
    this.prod_itemNo =this.navParams.data.itemNo;
    this.prod_description = this.navParams.data.description;
   
   
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
    if(this.heart==false){
      this.heart=true;
    }
    else if(this.heart==true){
      this.heart=false;
    }
  }
}
