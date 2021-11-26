import { VendaService } from './../../../../services/venda.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Venda } from 'src/app/models/Venda';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  id!: string;
  venda!: Venda;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private vendaService: VendaService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    let idNum: number = +this.id;
    console.log("id: " + idNum)
    this.vendaService.findById(idNum).subscribe((venda) => {
      this.venda = venda;
      console.log("venda: " + venda.cliente)
    });
  }
}
