import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Vendeur } from './vendeur';
import { VENDEURS } from './mock-vendeurs';
import { MessageService } from "../messages/message.service";

@Injectable({
  providedIn: 'root'
})
export class VendeurService {

  private vendeursUrl = 'api/vendeurs';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getVendeurs(): Observable<Vendeur[]> {
    return this.http.get<Vendeur[]>(this.vendeursUrl)
      .pipe(
        tap(_ => this.log('fetched vendeurs')),
        catchError(this.handleError<Vendeur[]>('getVendeurs', []))
      );
  }

   /** GET vendeur by id. Return `undefined` when id not found */
   getVendeurNo404<Data>(id: number): Observable<Vendeur> {
    const url = `${this.vendeursUrl}/?id=${id}`;
    return this.http.get<Vendeur[]>(url)
      .pipe(
        map(vendeurs => vendeurs[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} vendeur id=${id}`);
        }),
        catchError(this.handleError<Vendeur>(`getVendeur id=${id}`))
      );
  }


  getVendeur(id: number): Observable<Vendeur> {
    const url = `${this.vendeursUrl}/${id}`
    return this.http.get<Vendeur>(url)
      .pipe(
        tap(_ => this.log(`fetched vendeur id=${id}`)),
        catchError(this.handleError<Vendeur>(`getVendeur id=${id}`))
      )    
  }

  updateVendeur(vendeur: Vendeur): Observable<any> {
    return this.http.put(this.vendeursUrl, vendeur, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated vendeur id=${vendeur.id}`)),
        catchError(this.handleError<any>('updatedVendeur'))
      )
  }

  addVendeur(vendeur: Vendeur): Observable<Vendeur> {
    return this.http.post<Vendeur>(this.vendeursUrl, vendeur, this.httpOptions)
      .pipe(
        tap((newVendeur: Vendeur) => this.log(`added vendeur w/ id=${newVendeur.id}`)),
        catchError(this.handleError<Vendeur>(`addVendeur`)) 
      );
  }

  deleteVendeur(id: number): Observable<Vendeur> {
    const url = `${this.vendeursUrl}/${id}}`;

    return this.http.delete<Vendeur>(this.vendeursUrl, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted vendeur id=${id}`)),
        catchError(this.handleError<Vendeur>('deleteVendeur'))
      );
  }

  searchVendeurs(term: string): Observable<Vendeur[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Vendeur[]>(`${this.vendeursUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found vendeurs matching "${term}"`) :
          this.log(`no vendeurs matching "${term}"`)
        ),
        catchError(this.handleError<Vendeur[]>('searchVendeurs', []))
      );
  }

  private log(message: string) {
    this.messageService.add(`VendeurService: ${message}`)
  }

  private handleError<T>(operation = 'operation', result?:T) {
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
