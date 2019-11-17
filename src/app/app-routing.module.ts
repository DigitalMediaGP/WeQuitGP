import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: './home/home.module#HomePageModule'
   },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  { path: 'journal1', loadChildren: './journal/journal.module#JournalPageModule' },
  { path: 'journal', loadChildren: './journal-details/journal-details.module#JournalDetailsPageModule' },

  { path: 'journal/:id', loadChildren: './journal-details/journal-details.module#JournalDetailsPageModule' },
  // { 
  //   path: 'tab1',
  //   loadChildren: './tab1/tab1.module#Tab1PageModule'
  //  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
