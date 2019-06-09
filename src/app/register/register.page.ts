import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {

  public user: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };



  constructor(
    private httpClient: HttpClient, 
    private navCTRL: NavController) {}

  submit() {
    console.log("Submitting...");
    console.log(this.user);

    this.httpClient.post("http://localhost:3000/api/users", this.user).subscribe((response) => {
      console.log(response);
      this.navCTRL.navigateForward ( "");
    },
    (err) => {
      console.log(err);
      alert(err.error.message)
    });
  }

}
