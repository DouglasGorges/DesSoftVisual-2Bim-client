import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "src/app/services/produto.service";
import { Produto } from "src/app/models/Produto";
import { ItemVenda } from "src/app/models/ItemVenda";
import { ItemVendaService } from "src/app/services/itemVenda.service";

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {
    produtos!: Produto[];

    constructor(
        private produtoService: ProdutoService,
        private itemService: ItemVendaService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.produtoService.list().subscribe((produtos) => {
            this.produtos = produtos;
        });
    }

    adicionar(produto: Produto): void {
        let item: ItemVenda = {
            produto: produto,
            quantidade: 1,
            preco: produto.preco,
            produtoId: produto.produtoId!,
            carrinhoId: localStorage.getItem("carrinhoId")! || "",
        };
        this.itemService.create(item).subscribe((item) => {
            localStorage.setItem("carrinhoId", item.carrinhoId!);
        });
    }

    finalizar(): void {
      this.router.navigate(["/carrinho"]);
    }
}
