import { ItemVenda } from "./../models/ItemVenda";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ItemVendaService {
    private baseUrl = `${environment.serverUrl}/item`;

    constructor(private http: HttpClient) {}

    create(item: ItemVenda): Observable<ItemVenda> {
        return this.http.post<ItemVenda>(`${this.baseUrl}/create`, item);
    }
    getByCartId(carrinhoId: string): Observable<ItemVenda[]> {
        return this.http.get<ItemVenda[]>(
            `${this.baseUrl}/getbycartid/${carrinhoId}`
        );
    }
}
