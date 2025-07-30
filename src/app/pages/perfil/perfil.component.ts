import { FormularioService } from 'src/app/core/services/formulario.service';
import { FormGroup } from '@angular/forms';
import { CadastroService } from './../../core/services/cadastro.service';
import { TokenService } from './../../core/services/token.service';
import { Component, OnInit } from '@angular/core';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  titulo = 'Olá! ';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;
  token = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  form!: FormGroup<any> | null;

  constructor(
    private tokenService: TokenService,
    private cadastroService: CadastroService,
    private formularioService: FormularioService
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe((cadastro) => {
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome;
      this.carregarFormulário();
    });
  }

  carregarFormulário() {
    this.form = this.formularioService.getCadastro();

    //patchValue , uma função do Angular que permite atualizar
    //os formulários reativos parcialmente
    //A partir dele passamos um objeto com os
    //campos que serão alterados, assim ele
    //irá fazer uma mescla com os campos que já tínhamos no formulário.
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado,
      genero: this.cadastro.genero,
    });

    console.log(this.form);
  }

  atualizarPerfil() {
    console.log('Perfil atualizado com sucesso');
  }

  deslogar() {
    console.log('Logout realizado com sucesso');
  }
}
