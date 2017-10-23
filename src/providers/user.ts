import { CommonProvider } from './common';
import { HomePage } from './../pages/home/home';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainProvider} from './main';
import { NativeStorage } from '@ionic-native/native-storage';
import { Firebase } from '@ionic-native/firebase';

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
  public updateUrl : string = MainProvider.baseUrl+"modifyusers/";
  constructor(public com:CommonProvider,private firebase: Firebase,private nativeStorage: NativeStorage,public http: Http,public main:MainProvider) {
    console.log('Hello UserProvider Provider');
    this.getToken();
    console.log(this.deviceToken);
    this.com.presentToast(this.deviceToken);    
  }
   
  getToken(){
    this.firebase.getToken()
    .then(token => {console.log(`The token is ${token}`);
          this.deviceToken = token }) // save the token server-side and use it to push notifications to this device
    .catch(error => console.error('Error getting token', error));

    
  }

  registerUesr(Name:string,Email:any,PhoneNo:any,Password:any,Confirm:any,lang ?: any,lat ?:any,commerical ?:string){
   
    let user = {
    name:Name,
    email:Email,
    phone:PhoneNo,
    password:Password,
    confirm_password:Confirm,
    lang:lang,
    lat:lat,
    comercial_record:commerical,
    user_type:1,
    token:this.deviceToken,
    device_type:1
   };
   return this.http.post(this.registerUrl+MainProvider.lang,user).map((res) => res.json());
  }

  loginUser(Email:any , Password:any){
    let user = {
       email : Email,
       password : Password
    };
    return this.http.post(this.loginUrl+MainProvider.lang,user).map((res) => res.json());
  }
  forgetPassword(Email :any)
  { 
    let user = {
      email : Email
    };
    return this.http.post(this.forgetPassUrl+MainProvider.lang,user).map((res) => res.json());
  }  
   
  userStorageSave(user:any){
    this.nativeStorage.setItem('user', user)
      .then(
        () => {
          this.user = user;
          console.log('user Is Stored!');
        },
        error => console.error('Error storing item', error)
      );
  }
  
  userStorageGet(){
    return this.nativeStorage.getItem('user')
      .then(
        (user) => {
          this.user = user;
          console.log('user Is Geted!');
          // this.navCtrl.push(HomePage);
          //return user
        },
        error => console.error(error)
      );
  }

  userStorageErase(){
    this.nativeStorage.remove('user')
      .then(
        () => {
          this.user = null;
          console.log('user Is Erased!');
        },
        error => console.error(error)
      );
  }

  updateUser(Name :string,Email:string,Phone : number,Password:string,ConPassword:string){
    let user = {
      name:Name,
      email:Email,
      phone:Phone,
      password:Password,
      confirm_password:ConPassword
     };
    return this.http.put(this.updateUrl+this.user.id,user).map((res) => res.json());
  }
}
