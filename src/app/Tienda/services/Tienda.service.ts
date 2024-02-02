// Importación de módulos y clases necesarios de Angular
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL } from '../auth/services/GLOBAL';
import { Observable } from 'rxjs';

// Decorador @Injectable: Indica que la clase es un servicio y puede ser inyectada en otros componentes o servicios.
@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  // Definición de una propiedad privada llamada 'uri' para almacenar la URL base de la API.
  private uri

  // Constructor del servicio, donde se inyectan las dependencias necesarias.
  constructor(private http: HttpClient, private _router: Router) {
    // Se asigna la URL base de la API a la propiedad 'uri'.
    this.uri = GLOBAL.url;
  }

  // Método para enviar mensajes de contacto al servidor.
  enviar_mensaje_contacto(data: any): Observable<any> {
    // Se crean encabezados para la solicitud HTTP con el tipo de contenido JSON.
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Se realiza una solicitud POST a la URL de la API con los datos proporcionados y los encabezados.
    return this.http.post(this.uri + 'enviar_mensaje_contacto', data, { headers: headers });
  }
}
