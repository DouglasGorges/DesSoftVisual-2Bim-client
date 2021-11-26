import { Categoria } from "./Categoria";

export interface Produto {
  produtoId?: number;
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
  criadoEm?: Date;
  categoria: Categoria;
}