import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RomanService {
  constructor(private http: HttpClient) {}

  fromArab(arab: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/roman?fromArab=${arab}`, {
      responseType: 'text',
    });
  }
}
