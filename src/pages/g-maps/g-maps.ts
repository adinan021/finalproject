import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

/**
 * Generated class for the GMapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-g-maps',
  templateUrl: 'g-maps.html',
})
export class GMapsPage {
  public get navCtrl(): NavController {
    return this._navCtrl;
  }
  public set navCtrl(value: NavController) {
    this._navCtrl = value;
  }
  myLatitude = 0;
  myLongitude = 0;

  // Get #map element
  @ViewChild('map') mapElement: ElementRef;

  // Google Map object
  map: any;

  constructor(private _navCtrl: NavController, public navParams: NavParams, 
    public loadingCtrl: LoadingController, public geolocation: Geolocation){
      
    }


ionViewDidLoad() {
  console.log('ionViewDidLoad GMapsPage');
};

getCurrentLocation() {
  let loader = this.loadingCtrl.create();
  loader.present();
  this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
    this.myLatitude = resp.coords.latitude;
    this.myLongitude = resp.coords.longitude;

    let accuracy = resp.coords.accuracy;
    alert(this.myLatitude + ' ' + this.myLongitude + ', accuracy: ' + accuracy);

    let latLng = new google.maps.LatLng(this.myLatitude, this.myLongitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    loader.dismiss();
  });
} 
}
