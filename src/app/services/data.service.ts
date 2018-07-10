import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }

  private generalNotificationMessage = new Subject<string>();
  private isLoading = new Subject<boolean>();
  private updateAlarms = new Subject<string>();

  getGeneralNotificationMessage() {
      return this.generalNotificationMessage.asObservable();
  }

  setGeneralNotificationMessage(msg: string){
      this.generalNotificationMessage.next(msg);
  }

  getIsLoadingEvent(){
      return this.isLoading.asObservable();
  }

  setIsLoadingEvent(isLoading: boolean){
      this.isLoading.next(isLoading);
  }

  getIsUpdateAlarms(){
    return this.updateAlarms.asObservable();
  }

  setUpdateAlarms(msg: string){
    this.updateAlarms.next(msg);
  }

}
