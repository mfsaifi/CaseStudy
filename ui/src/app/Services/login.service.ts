import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})


  export class LoginService {

    Item_Url='http://localhost:29706/api/Account/Login';

    constructor(private http:HttpClient) { }

    validate(login:Login):Observable<any>
    {
      return this.http.post(this.Item_Url,login);
    }

  
  }
  




