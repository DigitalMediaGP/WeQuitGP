import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Journal, JournalService } from 'src/app/services/journal.service';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.page.html',
  styleUrls: ['./journal-details.page.scss'],
})
export class JournalDetailsPage implements OnInit {

  private journals: Observable<Journal[]>;

  journal: Journal = {
    id: '',
    name: '',
    notes: ''
  };

  constructor(private activatedRoute: ActivatedRoute, 
    private journalService: JournalService,
    private toastCtrl: ToastController, 
    private router: Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.journalService.getJournal(id).subscribe(idea => {
        this.journal = idea;
      });
    }
  }

  addJournal() {
    this.journalService.addJournal(this.journal).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Entry Added');
    }, err=> {
      this.showToast('There was a problem adding your entry :(');
    }); 
  }

  deleteJournal() {
    this.journalService.deleteJournal(this.journal.id).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Idea deleted');
    }, err => {
      this.showToast('There has been a problem deleting your entry');
    });
  }

  updateIdea() {
    this.journalService.updateJournal(this.journal).then(() => {
      this.showToast('Entry Updated');
    }, err => {
      this.showToast('There was a problem updating your entry :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
