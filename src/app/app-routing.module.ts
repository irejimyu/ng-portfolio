import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgHomeComponent } from './pages/pg-home/pg-home.component';
import { PgPageNotFoundComponent } from './pages/pg-page-not-found/pg-page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: PgHomeComponent,
  },
  {
    path: 'sample',
    component: PgHomeComponent,
  },
  
  {
    path: '**',
    redirectTo: '/404',
  },
  {
    path: '404',
    component: PgPageNotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
