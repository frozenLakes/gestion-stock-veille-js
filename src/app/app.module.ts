import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VendeursComponent } from './vendeurs/vendeurs.component';
import { VendeurDetailComponent } from './vendeurs/vendeur-detail/vendeur-detail.component';
import { MessagesComponent } from './vendeurs/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    VendeursComponent,
    VendeurDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
