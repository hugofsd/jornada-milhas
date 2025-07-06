import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-forma-busca',
  templateUrl: './forma-busca.component.html',
  styleUrls: ['./forma-busca.component.scss'],
})
export class FormaBuscaComponent {
  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    console.log(this.formBuscaService.formBusca.value);
  }
}
