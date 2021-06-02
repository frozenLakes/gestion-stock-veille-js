import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vendeur } from './vendeurs/vendeur';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const vendeurs = [
      {id: 1, name: 'Alexis', email: 'alexis@test.com', address: 'Marseille'},
      {id: 2, name: 'Daniel', email: 'alexis@test.com', address: 'Marseille'},
      {id: 3, name: 'Morgane', email: 'alexis@test.com', address: 'Marseille'},
      {id: 4, name: 'Evelyne', email: 'alexis@test.com', address: 'Marseille'},
      {id: 5, name: 'Patrick', email: 'alexis@test.com', address: 'Marseille'},
      {id: 6, name: 'Leila', email: 'alexis@test.com', address: 'Marseille'},
      {id: 7, name: 'Marc', email: 'alexis@test.com', address: 'Marseille'},
      {id: 8, name: 'Sylviane', email: 'alexis@test.com', address: 'Marseille'},
      {id: 9, name: 'Jean', email: 'alexis@test.com', address: 'Marseille'},
      {id: 10, name: 'Clément', email: 'alexis@test.com', address: 'Marseille'},
      {id: 11, name: 'Chloé', email: 'alexis@test.com', address: 'Marseille'},
      {id: 12, name: 'Xavier', email: 'alexis@test.com', address: 'Marseille'},
    ];
    return {vendeurs};
  }

  genId(vendeurs: Vendeur[]): number {
    return vendeurs.length > 0 ? Math.max(...vendeurs.map(vendeur => vendeur.id)) + 1 : 11;
  }
}
