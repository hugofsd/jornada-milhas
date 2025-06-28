import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-forma-busca',
  templateUrl: './forma-busca.component.html',
  styleUrls: ['./forma-busca.component.scss'],
})
export class FormaBuscaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }
}
