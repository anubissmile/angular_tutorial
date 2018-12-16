import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<UserCreateComponent>,
    private fb: FormBuilder
  ) { }

  userForm: FormGroup = this.fb.group({
    first_name: '',
    last_name: '',
    avatar: ''
  });

  ngOnInit() {
  }

  onSubmit() {
    const formVal = this.userForm.value;
    this.dialogRef.close({
      submit: true,
      value: formVal,
    });
  }

  onCancel() {
    this.dialogRef.close({
      submit: false,
    });
  }



}
