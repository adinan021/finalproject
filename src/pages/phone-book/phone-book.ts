import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [
    {name: 'Luffy',telephone: '0612542205', imgsUrl: 'assets/imgs/adinan01.jpg'}
    ,{name: 'Zoro',telephone: '0848561831', imgsUrl: 'assets/imgs/adinan02.jpg'}
    ,{name: 'Nami',telephone: '0622434459', imgsUrl: 'assets/imgs/adinan03.jpg'}
    ,{name: 'Sanji',telephone: '0980596914', imgsUrl: 'assets/imgs/adinan04.jpg'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);
  }

}//end
