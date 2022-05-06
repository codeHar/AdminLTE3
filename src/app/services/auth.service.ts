import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email, password){
    return this.http.post(`${environment.apiUrl}/user/login`, {email, password})
    .pipe(tap(res => {
      console.log(res)
      localStorage.setItem("user_token", res["token"])  
    })
    )
  }

  isAuthenticated(){
    if(localStorage.getItem("user_token")){
      return true
    }
    else {
      return false
    }
  }
}
