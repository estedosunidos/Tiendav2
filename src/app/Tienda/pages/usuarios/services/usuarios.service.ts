// Importaciones necesarias desde Angular
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/Tienda/auth/services/GLOBAL';
import { Observable } from 'rxjs';

// Decorador @Injectable: Indica que la clase es un servicio y puede ser inyectada en otros componentes o servicios.
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // Definición de una propiedad privada llamada 'uri' para almacenar la URL base de la API.
  private uri;

  // Constructor del servicio, donde se inyectan las dependencias necesarias.
  constructor(private http: HttpClient, private _router: Router) {
    // Se asigna la URL base de la API a la propiedad 'uri'.
    this.uri = GLOBAL.url;
  }

  // Método para obtener las regiones desde un archivo JSON en la carpeta 'assets'.
  getRegiones(): Observable<any> {
    return this.http.get('../../assets/regiones.json');
  }

  // Método para obtener las provincias desde un archivo JSON en la carpeta 'assets'.
  getProvicion(): Observable<any> {
    return this.http.get('../../assets/provincias.json');
  }

  // Método para obtener las ciudades desde un archivo JSON en la carpeta 'assets'.
  getciudades(): Observable<any> {
    return this.http.get('../../assets/ciudades.json');
  }

  // Método para registrar direcciones de clientes en la API.
  registro_direcciones_cliente(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http.post(this.uri + 'registro_direcciones_cliente', data, { headers: headers });
  }

  // Método para obtener direcciones de clientes desde la API.
  obtener_direcciones_cliente(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http.get(this.uri + 'obtener_direcciones_cliente/' + id, { headers: headers });
  }

  // Método para cambiar direcciones principales de clientes en la API.
  cambiar_direcciones_principal__cliente(id: any, cliente: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http.put(this.uri + 'cambiar_direcciones_principal__cliente/' + id + '/' + cliente, { data: true }, { headers: headers });
  }

  // Método para obtener detalles de órdenes de clientes desde la API.
  obtener_detalles_ordenes_cliente(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http.get(this.uri + 'obtener_detalles_ordenes_cliente/' + id, { headers: headers });
  }

  // Método para emitir reseñas de productos de clientes en la API.
  emitirreviewproductocliente(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http.post(this.uri + 'emitirreviewproductocliente', data, { headers: headers });
  }

  // Método para obtener órdenes de clientes desde la API.
  obtener_ordenes_cliente(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http.get(this.uri + 'obtener_ordenes_cliente/' + id, { headers: headers });
  }

  // Método para obtener detalles de clientes invitados desde la API.
  obtener_cliente_guest(id: any, token: any): Observable<any> {
    console.log(id, token);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http.get(this.uri + 'obtener_cliente_guest/' + id, { headers: headers });
  }

  // Método para actualizar clientes invitados en la API.
  actualizar_cliente_guest(id: any, data: any, token: any): Observable<any> {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http.put(this.uri + 'actualizar_cliente_guest/' + id, data, { headers: headers });
  }
}
