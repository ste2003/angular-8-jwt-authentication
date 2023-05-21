import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const NOT_API = 'http://localhost:8080/notificaapi/notificas/';

@Injectable({
  providedIn: 'root'
})
export class NotificaService {

  constructor(private http: HttpClient) { }

  buscarEscrito(escrito): Observable<any> {
    return this.http.get(NOT_API + escrito, { responseType: 'text' });
    //return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  
}
