import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { JournalService } from 'src/app/services/journal.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  journal: import("c:/Users/rober/Documents/GitHub/WeQuitGP/src/app/model.Journal").Journal;


 

  constructor(private journalService: JournalService,
              private activatedRoute: ActivatedRoute,
               public afAuth: AngularFireAuth ) {}
 

  ngOnInit() {
    
    let id = this.activatedRoute.snapshot.paramMap.get('id');
     if (id) {
       this.journalService.getJournal(id).subscribe(journal => {
         this.journal = journal;
       })
     }
  }

 


}
