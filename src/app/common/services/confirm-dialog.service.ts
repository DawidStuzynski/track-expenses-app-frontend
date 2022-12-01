import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../components/confirmation-modal/confirmation-modal.component';
import {IConfirmationModalData} from '../model/confirmation-modal-data';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {

  public constructor(private readonly dialog: MatDialog) {
  }

  public openConfirmModal(message: IConfirmationModalData): MatDialogRef<ConfirmationModalComponent, boolean> {
    return this.dialog.open(ConfirmationModalComponent, {
      data: message,
    });
  }

}