import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public afAuth: AngularFireAuth,) {}
    signOut() {
      this.afAuth.auth.signOut().then(() => {
        location.reload();
      });
    }
   

  ngOnInit() {
  }

}
