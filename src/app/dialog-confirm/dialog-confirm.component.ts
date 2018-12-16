import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  title: '';
  body: '';

  constructor(
    private dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (data) {
      this.title = data.title;
      this.body = data.body;
    }
  }

  ngOnInit() {
  }

  onConfirm() {
    this.dialogRef.close({
      submit: true
    });
  }

  onCancel() {
    this.dialogRef.close({
      submit: false
    });
  }


}
