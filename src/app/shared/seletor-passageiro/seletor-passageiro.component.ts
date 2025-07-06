import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  value: number = 0;

  onChange = (val: number) => {};
  onTouch = () => {};

  /*Este método é chamado pelo Angular Forms para atualizar o valor
   do componente personalizado com base no valor fornecido pelo
   formulário. O componente deve atualizar sua visualização e
   estado interno de acordo com o novo valor. */
  writeValue(val: any): void {
    this.value = val;
  }
  // Este método é usado para registrar uma função de retorno
  // de chamada que será chamada pelo componente personalizado
  // sempre que houver alterações em seu valor interno.
  // O componente deve chamar essa função sempre que o valor
  // for alterado para notificar o Angular Forms sobre as alterações.
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  //Este método é usado para registrar uma função de
  // retorno de chamada que será chamada pelo componente
  //  personalizado quando ele for tocado ou sofrer uma
  //  alteração no estado de foco. O componente deve chamar
  //  essa função sempre que ocorrer uma interação com ele,
  //  como um clique ou foco..
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  //Este método é usado para definir o estado de desabilitado
  //  do componente personalizado com base no valor fornecido
  //  pelo formulário. O componente deve atualizar sua
  //  visualização e comportamento de acordo com o estado
  //  de desabilitado.
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  incrementar() {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
