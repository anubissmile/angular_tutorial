import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.prod';
import { MatDialog } from '@angular/material/dialog';
import { UserCreateComponent } from '../user-create/user-create.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { MatTableDataSource } from '@angular/material';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  users: User[];
  displayColumns: string[] = ['id', 'first_name', 'last_name', 'avatar', 'manage'];
  dataSource = new MatTableDataSource();


  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe(user => {
      this.dataSource = new MatTableDataSource(user);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      // This is css commands.
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res.submit === true) {
        this.saveUser(res.value);
      }
    });
  }

  onDelete(id: number) {
    console.log('Delete user', id);
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '400px',
      data: {
        title: 'Confirmation',
        body: 'Do you want to confirm your delete?'
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res.submit === true) {
        this.deleteUser(id);
      }
    });
  }

  onEdit(id: number, name: string, lastname: string) {
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '400px',
      data: {
        title: 'Edit your data.',
        first_name: name,
        last_name: lastname,
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res.submit === true) {
        this.editUser(id, res.value);
      }
    });
  }

  editUser(id: number, user) {
    this.userService.edit(id, user).subscribe(
      () => this.getUsers(),
      () => this.getUsers()
    );
  }

  saveUser(user) {
    this.userService.create(user).subscribe(
      () => this.getUsers(),
      () => this.getUsers()
    );
  }

  deleteUser(id) {
    this.userService.delete(id).subscribe(
      () => this.getUsers(),
      () => this.getUsers()
    );
  }
}
