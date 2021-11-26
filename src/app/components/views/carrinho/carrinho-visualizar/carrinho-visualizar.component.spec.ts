import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoVisualizarComponent } from './carrinho-visualizar.component';

describe('CarrinhoVisualizarComponent', () => {
  let component: CarrinhoVisualizarComponent;
  let fixture: ComponentFixture<CarrinhoVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
