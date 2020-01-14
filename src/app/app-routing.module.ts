import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: './home/home.module#HomePageModule'
   },
  { path: 'journal1', loadChildren: './journal/journal.module#JournalPageModule' },

  { path: 'journal', loadChildren: './journal-details/journal-details.module#JournalDetailsPageModule' },

  { path: 'journal:id', loadChildren: './journal-details/journal-details.module#JournalDetailsPageModule' },
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
