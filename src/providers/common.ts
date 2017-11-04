import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";



@Injectable()
export class CommonProvider {
  public static cartNo : number = 0;

  constructor(public translate:TranslateService,public http: Http,public toastCtrl: ToastController) {
    console.log('Hello CommonProvider Provider');
  }
 
  presentToast(value) {
    let toast = this.toastCtrl.create({
      message: value,
      duration: 2500
    });
    toast.present();
  }
  traslateandToast(message :any){ 
    this.translate.get(message).subscribe(
    value => {
      this.presentToast(value);
    });}

   
 
}
