import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  title: '';
  first_name: '';
  last_name: '';
  userForm: FormGroup;
  userData: any;

  constructor(
    private dialogRef: MatDialogRef<UserEditComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (data) {
      this.userData = data;
      this.title = data.title;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
    }
  }

  ngOnInit() {
    this.setExistingValue();
  }

  setExistingValue() {
    this.userForm = this.fb.group({
      first_name: this.userData.first_name,
      last_name: this.userData.last_name,
    });
  }

  onSubmit() {
    const formValue = this.userForm.value;
    this.dialogRef.close({
      submit: true,
      value: formValue
    });
  }

  onCancel() {
    this.dialogRef.close({
      submit: false,
    });
  }


}
