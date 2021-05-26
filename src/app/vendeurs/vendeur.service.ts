import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Vendeur } from './vendeur';
import { VENDEURS } from './mock-vendeurs';
import { MessageService } from "./messages/message.service";

@Injectable({
  providedIn: 'root'
})
export class VendeurService {

  constructor(private messageService: MessageService) { }

  getVendeurs(): Observable<Vendeur[]> {
    const vendeurs = of(VENDEURS);
    this.messageService.add('VendeurService: fetched vendeurs');
    return vendeurs;
  }
}
