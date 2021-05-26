import { Component, OnInit, Input } from '@angular/core';

import { Vendeur } from '../vendeur';

@Component({
  selector: 'app-vendeur-detail',
  templateUrl: './vendeur-detail.component.html',
  styleUrls: ['./vendeur-detail.component.sass']
})
export class VendeurDetailComponent implements OnInit {

  @Input() vendeur?: Vendeur;

  constructor() { }

  ngOnInit(): void {
  }

}
