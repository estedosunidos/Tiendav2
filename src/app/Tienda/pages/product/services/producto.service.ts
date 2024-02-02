// Importaciones necesarias desde Angular
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/Tienda/auth/services/GLOBAL';

// Decorador @Injectable: Indica que la clase es un servicio y puede ser inyectada en otros componentes o servicios.
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // Definición de una propiedad privada llamada 'uri' para almacenar la URL base de la API.
  private uri;

  // Constructor del servicio, donde se inyectan las dependencias necesarias.
  constructor(private http: HttpClient, private _router: Router) {
    // Se asigna la URL base de la API a la propiedad 'uri'.
    this.uri = GLOBAL.url;
  }

  // Método para obtener la configuración pública desde la API.
  obtener_config_publico(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.uri}obtener_config_publico`, { headers: headers });
  }

  // Método para listar productos públicos según un filtro desde la API.
  listar_producto_publico(filter: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.uri + 'listar_producto_publico/' + filter, { headers: headers });
  }

  // Método para obtener descuentos activos desde la API.
  obtener_descuento_activo(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.uri + 'obtener_descuento_activo/', { headers: headers });
  }

  // Método para agregar productos al carrito de un cliente en la API.
  agregar_Carrito_cliente(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http.post(this.uri + 'agregar_Carrito_cliente', data, { headers: headers });
  }

  // Método para listar productos públicos según un slug desde la API.
  listar_productos_slug_publico(slug: any): Observable<any> {
    console.log(slug);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.uri + 'listar_productos_slug_publico/' + slug, { headers: headers });
  }

  // Método para listar productos recomendados públicos según una categoría desde la API.
  listar_producto_recomendado_publico(categoria: any): Observable<any> {
    console.log(categoria);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.uri + 'listar_producto_recomendado_publico/' + categoria, { headers: headers });
  }

}
