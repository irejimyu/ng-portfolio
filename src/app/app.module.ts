import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgHomeComponent } from './pages/pg-home/pg-home.component';
import { PgPageNotFoundComponent } from './pages/pg-page-not-found/pg-page-not-found.component';
import { MouseDirective } from './directives/mouse.directive';
import { ButtonDirective } from './directives/button.directive';

@NgModule({
  declarations: [
    AppComponent,
    PgHomeComponent,
    PgPageNotFoundComponent,
    MouseDirective,
    ButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
