import { FormularioService } from './../../core/services/formulario.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss'],
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup;

  @Input() titulo!: string;
  @Input() textoBotao!: string;
  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>();

  estadoControl = new FormControl<UnidadeFederativa | null>(
    null,
    Validators.required
  );

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) {}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: ['12312312123', [Validators.required]],
      cidade: ['City', Validators.required],
      email: ['chapolin@email.com', [Validators.required, Validators.email]],
      senha: ['123', [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: ['12312312123', Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [
        'chapolin@email.com',
        [
          Validators.required,
          Validators.email,
          FormValidations.equalTo('email'),
        ],
      ],
      confirmarSenha: [
        '123',
        [
          Validators.required,
          Validators.minLength(3),
          FormValidations.equalTo('senha'),
        ],
      ],
      aceitarTermos: [false, [Validators.requiredTrue]],
    });
    this.formularioService.setCadastro(this.cadastroForm);
  }
  executarAcao() {
    this.acaoClique.emit();
  }
}
