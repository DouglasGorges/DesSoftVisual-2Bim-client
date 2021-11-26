import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoVisualizarComponent } from './components/views/carrinho/carrinho-visualizar/carrinho-visualizar.component';
import { PedidoComponent } from './components/views/carrinho/pedido/pedido.component';

import { ProdutoListarComponent } from './components/views/produto/produto-listar/produto-listar.component';

const routes: Routes = [

  {
    path: "",
    component: ProdutoListarComponent
  },
  {
    path: "carrinho",
    component: CarrinhoVisualizarComponent
  },
  {
    path: "pedido/:idVenda",
    component: PedidoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
