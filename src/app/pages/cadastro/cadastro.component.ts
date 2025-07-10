import { Component } from '@angular/core';
import { FormularioService } from 'src/app/core/services/formulario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  titulo = 'Crie sua conta';
  textoBotao = 'CRIAR MINHA CONTA';

  constructor(private formularioService: FormularioService) {}

  cadastrar() {
    const cadastroForm = this.formularioService.getCadastroForm();
    console.log('Cadastro realizado com sucesso!', cadastroForm);
  }
}
