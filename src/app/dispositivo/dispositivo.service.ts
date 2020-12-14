import { Injectable } from '@angular/core';
import { Dispositivo } from './dispositivo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DispositivoService {
  private urlEndPoint: string = 'http://localhost:8008/api/dispositivo';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Dispositivo[]> {
    //return of(CLIENTES);
    console.log(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Dispositivo[])
    );
  }

  create(dispositivo: Dispositivo) : Observable<Dispositivo> {
    return this.http.post<Dispositivo>(this.urlEndPoint, dispositivo, {headers: this.httpHeaders})
  }

  getCliente(id): Observable<Dispositivo>{
    return this.http.get<Dispositivo>(`${this.urlEndPoint}/${id}`)
  }

  update(dispositivo: Dispositivo): Observable<Dispositivo>{
    return this.http.put<Dispositivo>(`${this.urlEndPoint}/${dispositivo.id}`, dispositivo, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Dispositivo>{
    return this.http.delete<Dispositivo>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
