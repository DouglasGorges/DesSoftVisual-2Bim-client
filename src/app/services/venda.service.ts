import { ItemVenda } from '../models/ItemVenda';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venda } from '../models/Venda';

@Injectable({
  providedIn: 'root',
})
export class VendaService {
  private baseUrl = `${environment.serverUrl}/venda`;

  constructor(private http: HttpClient) {}

  create(venda: Venda): Observable<Venda> {
    return this.http.post<Venda>(`${this.baseUrl}/create`, venda);
  }

  list(): Observable<Venda[]> {
    return this.http.get<Venda[]>(`${this.baseUrl}/list`);
  }

  findById(id: number): Observable<Venda> {
    return this.http.get<Venda>(`${this.baseUrl}/getbyid/${id}`);
  }
}
