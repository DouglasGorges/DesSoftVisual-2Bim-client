import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProdutoListarComponent } from './components/views/produto/produto-listar/produto-listar.component';
import { CarrinhoVisualizarComponent } from './components/views/carrinho/carrinho-visualizar/carrinho-visualizar.component';
import { PedidoComponent } from './components/views/carrinho/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListarComponent,
    CarrinhoVisualizarComponent,
    PedidoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
