import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '',loadChildren: './home/home.module#HomePageModule'},



  { path: 'journal', loadChildren: './journal-details/journal-details.module#JournalDetailsPageModule' },
  { path: 'journal/:id', loadChildren: './journal-details/journal-details.module#JournalDetailsPageModule' },

  { path: 'journalEntryList', loadChildren: './journal/journal.module#JournalPageModule' },
  //{ path: 'journal1/:id', loadChildren: './journal/journal.module#JournalPageModule' },
 
//{ path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'facts', loadChildren: './facts/facts.module#FactsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
