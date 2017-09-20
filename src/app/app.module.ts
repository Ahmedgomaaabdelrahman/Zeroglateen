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
import {} from '../pages/';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
