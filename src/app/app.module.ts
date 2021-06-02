import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VendeursComponent } from './vendeurs/vendeurs.component';
import { VendeurDetailComponent } from './vendeurs/vendeur-detail/vendeur-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendeurSearchComponent } from './vendeurs/vendeur-search/vendeur-search.component';
import { BondecommandeComponent } from './bondecommande/bondecommande.component';
import { TypedeboisComponent } from './typedebois/typedebois.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    VendeursComponent,
    VendeurDetailComponent,
    MessagesComponent,
    DashboardComponent,
    VendeurSearchComponent,
    BondecommandeComponent,
    TypedeboisComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
