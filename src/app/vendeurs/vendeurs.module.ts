import { NgModule } from '@angular/core';

import { VendeursComponent } from './vendeurs.component';
import { VendeurDetailComponent } from './vendeur-detail/vendeur-detail.component';
import { MessagesComponent } from '../messages/messages.component';
import { VendeurSearchComponent } from './vendeur-search/vendeur-search.component';

@NgModule({
  declarations: [
    VendeurSearchComponent
  ]
})
export class VendeursModule { }
