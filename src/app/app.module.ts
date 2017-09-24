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
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {MainService} from "../providers/main-service";


import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {Http, HttpModule} from "@angular/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    MyaccountPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
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
    MyaccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MainService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
