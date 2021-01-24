import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface StmMetro {
  id: string;
  name: string;
  data: {
    text: string;
    priority: string;
    level: string;
    logic_number: string;
    start_date: string;
    start_time: string;
  };
}

interface StmWrapper {
  metro: StmMetro;
}
export interface StmResponse {
  language: string;
  status: string;
  metro: StmWrapper;
}
@Injectable({
  providedIn: 'root',
})
export class StmService {
  private baseUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  fetch(): Observable<StmMetro[]> {
    const headers: HttpHeaders = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    const response$: Observable<StmResponse> = this.http.get<StmResponse>(
      `${this.baseUrl}/raw`,
      { headers }
    );

    return response$.pipe(
      map((s) => s.metro),
      // tap((x) => console.log(x)),

      map((s) => Object.values(s))
      // tap((x) => console.log(x))
    );
  }
}
