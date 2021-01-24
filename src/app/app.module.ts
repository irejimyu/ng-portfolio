import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgHomeComponent } from './pages/pg-home/pg-home.component';
import { PgPageNotFoundComponent } from './pages/pg-page-not-found/pg-page-not-found.component';
import { MouseDirective } from './directives/mouse.directive';
import { ButtonDirective } from './directives/button.directive';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PgContactComponent } from './pages/pg-contact/pg-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PgHomeComponent,
    PgPageNotFoundComponent,
    MouseDirective,
    ButtonDirective,
    NavigationBarComponent,
    PgContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
