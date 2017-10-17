import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainProvider} from './main';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  public user: any;
  public deviceToken : string = null;
  public userType : number ;
  public registerUrl : string = MainProvider.baseUrl+"register/";
  public loginUrl : string = MainProvider.baseUrl+"login/";
  public forgetPassUrl : string = MainProvider.baseUrl+"forgetpassword/";

  constructor(public http: Http,public main:MainProvider) {
    console.log('Hello UserProvider Provider');
  }
   
  registerUesr(Name:string,Email:any,PhoneNo:number,Password:any,Confirm:any,lang ?: any,lat ?:any,commerical ?:string){
   let user = {
    name:name,
    email:Email,
    phone:PhoneNo,
    password:Password,
    confirm_password:Confirm,
    lang:lang,
    lat:lat,
    comercial_record:commerical,
    user_type:this.userType,
    token:this.deviceToken,
    device_type:''
   }
  }
}
