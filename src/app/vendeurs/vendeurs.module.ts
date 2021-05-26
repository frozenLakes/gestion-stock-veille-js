import { NgModule } from '@angular/core';

import { VendeursComponent } from './vendeurs.component';
import { VendeurDetailComponent } from './vendeur-detail/vendeur-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    VendeursComponent,
    VendeurDetailComponent,
    MessagesComponent
  ],
  exports: [
    VendeursComponent,
    VendeurDetailComponent,
    MessagesComponent
  ]
})
export class VendeursModule { }
