import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {
  }

  ionViewDidLoad() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {
      message: 'Do you hear me  ?'
    }

    this.http.post('http://localhost:3000/api/test', JSON.stringify(body), { headers: headers })
      .map( res => res.json() )
      .subscribe( data => {
        console.log(data);
      });
  }
}
