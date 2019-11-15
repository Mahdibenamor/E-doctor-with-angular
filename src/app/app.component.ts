import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var config = {
      apiKey: "AIzaSyDGlYL-yBtlx7C4b8JFGpbPuTHghM2IUY8",
      authDomain: "hexoskin-49846.firebaseapp.com",
      databaseURL: "https://hexoskin-49846.firebaseio.com",
      projectId: "hexoskin-49846",
      storageBucket: "",
      messagingSenderId: "95577812911"
    };
    firebase.initializeApp(config);
  }
}
