import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:5000/api/User/';

  /*
  login(loginPayload) : Observable<any> {
    return this.http.post<any>('http://localhost:5000/' + 'token/generate-token', loginPayload);
  } */

  getUsers() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }

  createUser(user: User): Observable<any> {
    console.log("user",user);
    return this.http.post<any>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<any>(this.baseUrl + user.Id, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}