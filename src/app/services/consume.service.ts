import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConsumeService {

  private _urlBase: string = 'http://127.0.0.1:5000';
  constructor(private _http: HttpClient) { }

  getTickets(): Observable<any[]> {
    return this._http
        .get<any[]>(`${this._urlBase}/tickets`, {responseType: 'json'})
        .pipe(catchError(this.handleError));
  }

  getAlarms(): Observable<any[]> {
    return this._http
        .get<any[]>(`${this._urlBase}/alarms`, {responseType: 'json'})
        .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json() || 'Server error');
  }
}
