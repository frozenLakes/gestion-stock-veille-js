import { Component, OnInit } from '@angular/core';
import {VendeurService} from "../vendeurs/vendeur.service";
import {Vendeur} from "../vendeurs/vendeur";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  vendeurs: Vendeur[] = [];

  constructor(private vendeurService: VendeurService) { }

  ngOnInit(): void {
    this.getVendeurs()
  }

  getVendeurs(): void {
    this.vendeurService.getVendeurs()
      .subscribe(vendeurs => this.vendeurs = vendeurs.slice(1, 5));
  }

}
