import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Comment[]> {
    return this.http.get<[]>(`${environment.jsonServeURL}/comments`);
  }
}
