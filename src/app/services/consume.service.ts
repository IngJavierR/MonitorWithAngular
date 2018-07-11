import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConsumeService {

  //private _urlBase: string = 'http://10.106.7.39:5000';
  private _urlBase: string = 'http://7842a141.ngrok.io';
  constructor(private _http: HttpClient) { }

  getTickets(): Observable<any[]> {
    return this._http
        .get<any[]>(`${this._urlBase}/tickets`, {responseType: 'json'})
        //.get<any[]>('../assets/tickets.json', {responseType: 'json'})
        .pipe(catchError(this.handleError));
  }

  getAlarms(time): Observable<any[]> {
    console.log('getAlarms-time', time);
    return this._http
        .get<any[]>(`${this._urlBase}/alarms/${time}`, {responseType: 'json'})
        //.get<any[]>('../assets/alarms.json', {responseType: 'json'})
        .pipe(catchError(this.handleError));
  }

  getDeviceInfo(id): Observable<any[]> {
    console.log('getDeviceInfo-id', id);
    return this._http
        .get<any[]>(`${this._urlBase}/device/${id}`, {responseType: 'json'})
        //.get<any[]>('../assets/device.json', {responseType: 'json'})
        .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json() || 'Server error');
  }
}
