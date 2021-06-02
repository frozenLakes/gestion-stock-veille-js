import { Component, OnInit } from '@angular/core';
import { Vendeur } from './vendeur';
import { VendeurService } from "./vendeur.service";

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.sass']
})

export class VendeursComponent implements OnInit {

  vendeurs: Vendeur[] = [];

  constructor(private vendeurService: VendeurService) { }

  ngOnInit(): void {
    this.getVendeurs();
  }

  getVendeurs(): void {
    this.vendeurService.getVendeurs()
      .subscribe(vendeurs => this.vendeurs = vendeurs);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.vendeurService.addVendeur({name} as Vendeur)
      .subscribe(vendeur => {
        this.vendeurs.push(vendeur);
      })
  }

  delete(vendeur: Vendeur): void {
    this.vendeurs = this.vendeurs.filter(v => v !== vendeur);
    this.vendeurService.deleteVendeur(vendeur.id).subscribe();
  }

}
