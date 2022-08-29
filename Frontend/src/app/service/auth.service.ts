import { JwtDot } from './../model/jwt-dot';
import { LoginUsuario } from './../model/login-usuario';
import { Observable } from 'rxjs';
import { NuevoUsuario } from './../model/nuevo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDot> {
    return this.httpClient.post<JwtDot>(this.authURL + 'login', loginUsuario);
  }
}
