import { Isbn_ref } from './../modelosInterface/isbn_ref';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Isbn } from '../modelosInterface/isbn';

@Injectable({
  providedIn: 'root'
})
export class IsbnService {

  private readonly uriApi = '../../assets/isbn.json'
  private readonly uriApiRef = '../../assets/isbn_ref.json'

  constructor(
    private httpClient: HttpClient,
    private httpClientRef: HttpClient
    ) { }

    isbnCreate() {
      return this.httpClient.get<Isbn[]>(this.uriApi).pipe(
        first(),
        tap(apiIsbn => apiIsbn),
      )
    }

    isbnCreateRef() {
      return this.httpClientRef.get<Isbn_ref[]>(this.uriApiRef).pipe(
        first(),
        tap(apiIsbnRef => apiIsbnRef),
      )
    }

}


