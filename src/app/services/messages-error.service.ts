import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsFormatsComponent } from 'src/app/components/dialogs-formats/dialogs-formats.component';
import { PARAMS_MODAL } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class MessagesErrorService {
    
  constructor(private dialog: MatDialog) { }

  public showError(): void {
    const dialogRef = this.dialog.open(DialogsFormatsComponent, { data: PARAMS_MODAL.ERROR_SERVICE });
  }

  public showErrorDatos(): void {
    const dialogRef = this.dialog.open(DialogsFormatsComponent, { data: PARAMS_MODAL.ERROR_DATOS });
  }

}