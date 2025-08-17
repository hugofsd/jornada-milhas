import { Router, RouterModule } from '@angular/router';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { FormGroup } from '@angular/forms';
import { CadastroService } from '../services/cadastro.service';
import { TokenService } from '../services/token.service';
import { Component, OnInit } from '@angular/core';
import { PessoaUsuaria } from 'src/app/core/types/type';
import { UserService } from '../services/user.service';

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
    private formularioService: FormularioService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro().subscribe((cadastro) => {
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome;
      this.carregarFormulario();
    });
  }

  carregarFormulario() {
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
    console.log('Atualizar Perfil');
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado,
      genero: this.form?.value.genero,
    };

    if (this.form?.value.senha) {
      dadosAtualizados.senha = this.form.value.senha;
    }

    this.cadastroService.editarCadastro(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastro editado com sucesso!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deslogar() {
    this.userService.logout();
    this.router.navigate(['auth/login']);
  }
}
