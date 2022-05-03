import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) { }

  buscarPais ( dato: string): Observable<Country[]>{

  const url = `${ this.apiUrl }/name/${ dato }`;

  return this.http.get<Country[]>(url);

  }
  buscarCapital ( dato: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ dato }`;
    return this.http.get<Country[]>(url);
  }
  getPaisPorAlpha ( dato: string): Observable<Country>{

    const url = `${ this.apiUrl }/alpha/${ dato }`;
    return this.http.get<Country>(url);
  }
}
