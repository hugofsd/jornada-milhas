import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  cadastroForm: FormGroup | null = null;

  getCadastroForm(): FormGroup | null {
    return this.cadastroForm;
  }

  setCadastroForm(form: FormGroup) {
    this.cadastroForm = form;
  }
}
