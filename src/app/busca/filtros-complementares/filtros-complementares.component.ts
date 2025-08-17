import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { PassagensService } from 'src/app/busca/services/passagens.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss'],
})
export class FiltrosComplementaresComponent {
  @Output() realizarBusca = new EventEmitter();

  constructor(
    public formBuscaService: FormBuscaService,
    private passagemService: PassagensService
  ) {}

  busca() {
    if (!this.formBuscaService.formEstaValido) {
      // Marca todos os campos do formulário como "tocados" para exibir as mensagens de erro
      this.formBuscaService.formBusca.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      return;
    }
    this.realizarBusca.emit(this.formBuscaService.obterDadosBusca());
  }

  limparFiltros() {
    this.formBuscaService.formBusca.patchValue({
      conexoes: null,
      companhias: null,
      precoMin: this.passagemService.precoMin,
      precoMax: this.passagemService.precoMax,
    });
  }
}
