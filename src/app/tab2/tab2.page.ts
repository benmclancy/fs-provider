import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {Rental} from '../models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  

  public rentals: Array<Rental> = [];

  constructor(private navCtrl: NavController) {
    let user1 = new Rental();
    user1.firstName = "Miki";
    user1.lastName = "vk";
    user1.price = 200;

    let user2 = new Rental();
    user2.firstName = "John";
    user2.lastName = "Smith";
    user2.price = 190;

    let user3 = new Rental();
    user3.firstName = "Neb";
    user3.lastName = "Ycnalc";
    user3.price = 230;

    this.rentals.push(user1);
    this.rentals.push(user2);
    this.rentals.push(user3);
  }
  



  navToTab1() {
    this.navCtrl.navigateForward("main/tabs/tab1");
  }

}
