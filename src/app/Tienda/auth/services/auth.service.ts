import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Definición de una propiedad privada llamada 'uri' para almacenar la URL base de la API.
  private uri;

  // Constructor del servicio, donde se inyectan las dependencias necesarias.
  constructor(private http: HttpClient, private _router: Router) {
    // Se asigna la URL base de la API a la propiedad 'uri'.
    this.uri = GLOBAL.url;
  }

  // Método para realizar el login de un cliente en la API.
  login_cliente(data: any): Observable<any> {
    console.log(data);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.uri + 'login_cliente', data, { headers: headers });
  }

  // Método para verificar si el usuario tiene un token válido y no expirado.
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('Token');

    if (!token) {
      return false;
    }

    try {
      // Se utiliza el servicio JwtHelperService de '@auth0/angular-jwt' para decodificar y verificar el token.
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      // Se verifica si el token ha expirado o si no se puede decodificar correctamente.
      if (helper.isTokenExpired(token) || !decodedToken) {
        localStorage.clear(); // Se limpia el almacenamiento local si el token no es válido.
        return false;
      }
    } catch (e) {
      localStorage.clear(); // Se limpia el almacenamiento local en caso de error al decodificar el token.
      return false;
    }

    return true;
  }
}
