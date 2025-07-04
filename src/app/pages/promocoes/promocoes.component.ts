import { Component } from '@angular/core';
import { PromocaoService } from 'src/app/core/servicos/promocao.service';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
})
export class PromocoesComponent {
  promocoes!: Promocao[];

  constructor(private service: PromocaoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.promocoes = res;
    });
  }
}
