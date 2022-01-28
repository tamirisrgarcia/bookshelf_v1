import { first, tap } from 'rxjs';
import { Sagas } from './../modelosInterface/sagas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SagasService {

  private readonly uriAPI = '../../assets/sagas.json'

  constructor(private sagaHttp: HttpClient) { }

  listaSagas(){
    return this.sagaHttp.get<Sagas[]>(this.uriAPI).pipe(
      first(),
      tap(apiSagas => console.log(apiSagas))
    )
  }
}
