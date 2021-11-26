import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from 'src/app/models/FormaPagamento';
import { ItemVenda } from 'src/app/models/ItemVenda';
import { FormaPagamentoService } from 'src/app/services/formaPagamento.service';
import { ItemVendaService } from 'src/app/services/itemVenda.service';
import { Router } from '@angular/router';
import { VendaService } from 'src/app/services/venda.service';
import { Venda } from 'src/app/models/Venda';

@Component({
  selector: 'app-carrinho-visualizar',
  templateUrl: './carrinho-visualizar.component.html',
  styleUrls: ['./carrinho-visualizar.component.css'],
})
export class CarrinhoVisualizarComponent implements OnInit {
  itens!: ItemVenda[];
  formasPagamento!: FormaPagamento[];
  cliente!: string;
  formaPagamentoSelecionada!: FormaPagamento;

  constructor(
    private itemService: ItemVendaService,
    private formaPagamentoService: FormaPagamentoService,
    private vendaService: VendaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemService
      .getByCartId(localStorage.getItem('carrinhoId')!)
      .subscribe((itens) => {
        this.itens = itens;
      });
    this.formaPagamentoService.list().subscribe((formasPagamento) => {
      this.formasPagamento = formasPagamento;
    });
  }

  finalizar(): void {
    let venda: Venda = {
      cliente: this.cliente,
      itens: this.itens,
      formaPagamento: this.formaPagamentoSelecionada
    };
    let idVenda;
    this.vendaService.create(venda).subscribe((venda) => {
      idVenda = venda.id;
    });

    this.router.navigate([`/pedido/${idVenda}`]);
  }
}
