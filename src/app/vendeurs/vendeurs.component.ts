import { Component, OnInit } from '@angular/core';
import { Vendeur } from './vendeur';
import { VENDEURS } from './mock-vendeurs';
import { VendeurService } from "./vendeur.service";
import { MessageService } from "./messages/message.service";

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.sass']
})

export class VendeursComponent implements OnInit {

  selectedVendeur?: Vendeur;

  vendeurs: Vendeur[] = [];

  constructor(private vendeurService: VendeurService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getVendeurs();
  }

  onSelect(vendeur: Vendeur): void {
    this.selectedVendeur = vendeur;
    this.messageService.add(`VendeursComponent: Selected hero id ${vendeur.id}`)
  }

  getVendeurs(): void {
    this.vendeurService.getVendeurs()
      .subscribe(vendeurs => this.vendeurs = vendeurs);
  }

}
