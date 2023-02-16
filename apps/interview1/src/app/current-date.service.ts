import { getLocaleTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentDateService {

  constructor() { }

  newCurrentTime = new Observable((observer: any) => {
    setInterval(() => {
      observer.next(new Date().getTime() / 1000);
    }, 1000);
  });

  addCountDown(seconds: any) {
    let currentTime = seconds; // Default to 300 seconds = 5 minutes
    return currentTime;
  }

  addCurrentTime() {
    let currentTime = new Date().getTime() / 1000; // Turn to seconds
    return currentTime;    
  }
}
