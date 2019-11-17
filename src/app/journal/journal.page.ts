import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Journal, JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  private journals: Observable<Journal[]>;

  constructor(private journalService: JournalService, public afAuth: AngularFireAuth,) {}
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

  ngOnInit() {
    this.journals = this.journalService.getJournals();
  }

}
