import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Vendeur } from '../vendeur';
import { VendeurService } from '../vendeur.service';

@Component({
  selector: 'app-vendeur-search',
  templateUrl: './vendeur-search.component.html',
  styleUrls: ['./vendeur-search.component.sass']
})
export class VendeurSearchComponent implements OnInit {

  vendeurs$!: Observable<Vendeur[]>;
  private searchTerms = new Subject<string>();

  constructor(private vendeurService: VendeurService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.vendeurs$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.vendeurService.searchVendeurs(term))
    );
  }

}
