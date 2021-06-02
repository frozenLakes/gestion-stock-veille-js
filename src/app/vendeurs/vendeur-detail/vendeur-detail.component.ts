import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { VendeurService } from "../vendeur.service";
import { Vendeur } from '../vendeur';

@Component({
  selector: 'app-vendeur-detail',
  templateUrl: './vendeur-detail.component.html',
  styleUrls: ['./vendeur-detail.component.sass']
})
export class VendeurDetailComponent implements OnInit {

  @Input() vendeur?: Vendeur;

  constructor(
    private route: ActivatedRoute,
    private vendeurService: VendeurService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVendeur()
  }

  getVendeur(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vendeurService.getVendeur(id)
      .subscribe(vendeur => this.vendeur = vendeur);
  }

  save(): void {
    if (this.vendeur) {
      this.vendeurService.updateVendeur(this.vendeur)
        .subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.location.back();
  }

}
