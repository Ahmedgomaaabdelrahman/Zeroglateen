import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from './../pages/map/map';
import { NativeStorage } from '@ionic-native/native-storage';
import { SignsupplierPage } from './../pages/signsupplier/signsupplier';
import { SignproductivePage } from './../pages/signproductive/signproductive';
import { SigntypesPage } from './../pages/signtypes/signtypes';
import { MyaccountPage } from './../pages/myaccount/myaccount';
import { FavoritesPage } from './../pages/favorites/favorites';
import { TermsPage } from './../pages/terms/terms';
import { SignupPage } from './../pages/signup/signup';
import { SettingsPage } from './../pages/settings/settings';
import { SearchPage } from './../pages/search/search';
import { RatingPage } from './../pages/rating/rating';
import { PaymentPage } from './../pages/payment/payment';
import { OrdermapPage } from './../pages/ordermap/ordermap';
import { OrderdetailsPage } from './../pages/orderdetails/orderdetails';
import { LoginPage } from './../pages/login/login';
import { InvoicePage } from './../pages/invoice/invoice';
import { ForgetpassPage } from './../pages/forgetpass/forgetpass';
import { FilterPage } from './../pages/filter/filter';
import { CartPage } from './../pages/cart/cart';
import { AddlocationPage } from './../pages/addlocation/addlocation';
import { AboutPage } from './../pages/about/about';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Nav} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {TranslateService} from "@ngx-translate/core";
import { IonicStorageModule } from '@ionic/storage';

import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {Http, HttpModule} from "@angular/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainProvider } from '../providers/main';
import { UserProvider } from '../providers/user';
import { CommonProvider } from '../providers/common';
import { ProductProvider } from '../providers/product';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

var config = {
  apiKey: "AIzaSyDXH5U0Uc3uAIAtvP6FCywKvHdQ9G9Waoo",
  authDomain: "zero-5f2ff.firebaseapp.com",
  databaseURL: "https://zero-5f2ff.firebaseio.com",
  projectId: "zero-5f2ff",
  storageBucket: "zero-5f2ff.appspot.com",
  messagingSenderId: "285822790686"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    AddlocationPage,
    CartPage,
    FilterPage,
    ForgetpassPage,
    InvoicePage,
    LoginPage,
    OrderdetailsPage,
    OrdermapPage,
    PaymentPage,
    RatingPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TermsPage,
    SigntypesPage,
    SignproductivePage,
    SignsupplierPage,
    FavoritesPage,
    MyaccountPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
     AngularFireModule.initializeApp(config),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    AddlocationPage,
    CartPage,
    FilterPage,
    ForgetpassPage,
    InvoicePage,
    LoginPage,
    OrderdetailsPage,
    OrdermapPage,
    PaymentPage,
    RatingPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TermsPage,
    SigntypesPage,
    SignproductivePage,
    SignsupplierPage,
    FavoritesPage,
    MyaccountPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
     AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MainProvider,
    UserProvider,
    CommonProvider,
    ProductProvider,
    Geolocation
    
 
  ]
})
export class AppModule {}
