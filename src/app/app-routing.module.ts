import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgContactComponent } from './pages/pg-contact/pg-contact.component';
import { PgHomeComponent } from './pages/pg-home/pg-home.component';
import { PgPageNotFoundComponent } from './pages/pg-page-not-found/pg-page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: PgHomeComponent,
  },
  {
    path: 'contact',
    component: PgContactComponent,
  },
  
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path: '404',
    component: PgPageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
