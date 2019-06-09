import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Property } from '../models/property.model';
import { NavController } from '@ionic/angular';

import {Rental} from '../models';
import { PropertyBindingType } from '@angular/compiler';

class PropertyResponse {
  public properties: Array<Property>;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public property: Property = new Property;

  public rentals: Array<Rental> = [];

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    // let user1 = new Rental();
    // user1.firstName = "Miki";
    // user1.lastName = "vk";
    // user1.price = 200;

    // let user2 = new Rental();
    // user2.firstName = "John";
    // user2.lastName = "Smith";
    // user2.price = 190;

    // let user3 = new Rental();
    // user3.firstName = "Neb";
    // user3.lastName = "Ycnalc";
    // user3.price = 230;

    // this.rentals.push(user1);
    // this.rentals.push(user2);
    // this.rentals.push(user3);

    
  }
  
  ngOnInit() {
    this.httpClient.get("http://localhost:3000/api/properties").subscribe((response: Array<any>) => {
          console.log(response);
          // response.forEach(function())
          // this.rentals = response;
        }
      );
    // this.activatedRoute.queryParamMap.subscribe(
    //   (parameters: ParamMap) => {
    //     console.log(parameters);
    //     //const userId = parameters.get("user_id")

    //     this.httpClient
    //       .get("http://localhost:3000/api/properties")
    //       .subscribe(
    //         (response) => {
    //           console.log(response);
    //           // console.log(response);
    //           // this.property.id = response.user.id;
    //           // this.property.first_name = response.user.first_name;
    //           // this.property.last_name = response.user.last_name;
    //           // this.property.email = response.user.email;
    //           // this.property.password = response.user.password;
    //         }
    //       );
    //   }
    // );
  }


  navToTab1() {
    this.navCtrl.navigateForward("main/tabs/tab1");
  }

}
