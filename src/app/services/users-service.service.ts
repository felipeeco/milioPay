import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL : string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(this.apiURL);
  }
}
