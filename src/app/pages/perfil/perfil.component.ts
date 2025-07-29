import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  titulo = 'Olá!';

  textoBotao = 'ATUALIZAR';

  atualizarPerfil() {
    console.log('Perfil atualizado com sucesso');
  }

  deslogar() {
    console.log('Logout realizado com sucesso');
  }
}
