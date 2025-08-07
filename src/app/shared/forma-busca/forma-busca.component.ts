import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-forma-busca',
  templateUrl: './forma-busca.component.html',
  styleUrls: ['./forma-busca.component.scss'],
})
export class FormaBuscaComponent {
  @Output() realizarBusca = new EventEmitter(); // emitir a informação

  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    if (this.formBuscaService.formEstaValido) {
      const formBuscaValue = this.formBuscaService.formBusca.value;
      this.realizarBusca.emit(formBuscaValue);
    } else {
      alert('O formulário precisa ser preenchido');
    }
  }
}
