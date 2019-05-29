import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {Rental} from '../models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public rents: Array<Rental> = [];

  public inFirstName: string;
  public inLastName: string;
  public inPrice: number;
  public rent: Rental;

  constructor() {
    this.rent.firstName = this.inFirstName;
    this.rent.lastName = this.inLastName;
    this.rent.price = this.inPrice;
  }


}
