import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { FormaPagamento } from '../models/FormaPagamento';

@Injectable({
  providedIn: 'root',
})
export class FormaPagamentoService {
  private baseUrl = `${environment.serverUrl}/formaPagamento`;

  constructor(private http: HttpClient) {}

  list(): Observable<FormaPagamento[]> {
    return this.http.get<FormaPagamento[]>(`${this.baseUrl}/list`);
  }

  findById(id: number): Observable<FormaPagamento> {
    return this.http.get<FormaPagamento>(`${this.baseUrl}/findById/${id}`);
  }
}
