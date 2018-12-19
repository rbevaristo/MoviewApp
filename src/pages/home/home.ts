import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Http } from "@angular/http";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, public http: Http) {}
  public videos: any;

  ionViewDidLoad() {
    this.http
      .get("http://192.168.2.144:8000/api/movies")
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleResponse(data) {
    console.log(JSON.parse(data._body));
    this.videos = JSON.parse(data._body).data;
    console.log(this.videos);
  }

  handleError(error) {
    console.log(error);
  }
}
