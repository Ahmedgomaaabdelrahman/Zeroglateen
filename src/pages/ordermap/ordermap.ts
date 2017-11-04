import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController,Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ViewChild, ElementRef } from '@angular/core';


declare var google;
@Component({
  selector: 'page-ordermap',
  templateUrl: 'ordermap.html',
})
export class OrdermapPage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public markers =[];
  public static lat : number;
  public static lng : number;  
  constructor(public platform:Platform,public geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams) {
    platform.ready().then(() => {
      this.loadMap();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdermapPage');
  }
 finish(){
   this.navCtrl.push(HomePage);
 
 }
 loadMap() {
  this.geolocation.getCurrentPosition().then((resp) => {
    let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
    OrdermapPage.lat = resp.coords.latitude;
    OrdermapPage.lng = resp.coords.longitude;
    let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.setMapOnAll(null);
      var location  = event.latLng;
      OrdermapPage.lat = location.lat();
      OrdermapPage.lng = location.lng();
      console.log(OrdermapPage.lat);
      console.log(OrdermapPage.lng);
      this.addMarker(location);
      this.navCtrl.pop();
    });
    this.addMarker(this.map.getCenter());
  
  }).catch((error) => {
    console.log('Error getting location', error);
  });
}

addMarker(LatLng){
  let marker  = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: LatLng
  });
  this.markers.push(marker);
}

setMapOnAll(map) {
  for (var i = 0; i < this.markers.length; i++) {
    this.markers[i].setMap(map);
  }
}
}
