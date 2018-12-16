import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<[]>(`${environment.jsonServeURL}/users`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${environment.jsonServeURL}/users`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.jsonServeURL}/users/${id}`);
  }

  edit(id: number, user: User) {
    return this.http.patch(`${environment.jsonServeURL}/users/${id}`, user);
  }
}
