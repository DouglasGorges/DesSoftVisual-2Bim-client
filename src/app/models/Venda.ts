import { FormaPagamento } from './FormaPagamento';
import { ItemVenda } from "./ItemVenda";

export interface Venda {
    id?: number;
    cliente: string;
    itens: ItemVenda[];
    formaPagamento: FormaPagamento;
    criadoEm?: Date;
}
