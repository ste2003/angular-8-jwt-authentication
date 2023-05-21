import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const NOT_API = 'http://localhost:8080/notificaapi/notificas/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class NovedadService {

  constructor(private http: HttpClient) { }

  buscarEscrito(escrito): Observable<any> {
    console.log("SERVICIO: nro a buscar:", escrito);
    return this.http.get(NOT_API + escrito, { responseType: 'text' });
  }

  buscarId(id): Observable<any> {
    console.log("SERVICIO: nro a buscar:", id);
    return this.http.get(NOT_API + id, { responseType: 'text' });
  }

  register(notifica): Observable<any> {
    return this.http.post(NOT_API , {
      escrito: notifica.escrito,
      estado: notifica.estado,
      observa: notifica.observa,
      secretaria: notifica.secretaria,
      fecha: notifica.fecha

    }, httpOptions);
  }
  listar(): Observable<any> {
    return this.http.get(NOT_API+'all', { responseType: 'text' });
  }  
}