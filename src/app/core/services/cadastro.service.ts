import { PessoaUsuaria } from 'src/app/core/types/type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(
      `${this.apiUrl}/auth/cadastro`,
      pessoaUsuaria
    );
  }

  buscarCadastro(token: string): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, {
      headers,
    });
  }

  editarCadastro(
    pessoaUsuaria: PessoaUsuaria,
    token: string
  ): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, {
      headers,
    });
  }
}
