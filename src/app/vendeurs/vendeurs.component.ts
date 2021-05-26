import { Component, OnInit } from '@angular/core';
import { Vendeur } from './vendeur';
import { VENDEURS } from './mock-vendeurs';

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.sass']
})
export class VendeursComponent implements OnInit {

  vendeurs = VENDEURS;
  selectedVendeur?: Vendeur;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vendeur: Vendeur): void {
    this.selectedVendeur = vendeur;
  }

}
