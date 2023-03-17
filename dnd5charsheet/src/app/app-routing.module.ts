import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharsheetComponent } from './charsheet/charsheet.component';

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  // { path: 'charactersheet/:id', component: CharsheetComponent },
//   { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


