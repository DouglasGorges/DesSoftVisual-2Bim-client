import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Produto } from '../models/Produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private baseUrl = `${environment.serverUrl}/produto`;

  constructor(private http: HttpClient) {}

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      `${this.baseUrl}/create`,
      produto
    );
  }

  list(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/list`);
  }

  findById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/getbyid/${id}`);
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      `${this.baseUrl}/update`,
      produto
    );
  }

  delete(nome: string): Observable<Produto> {
    return this.http.delete<Produto>(`${this.baseUrl}/delete/${nome}`);
  }
}
