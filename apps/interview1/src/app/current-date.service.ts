import { getLocaleTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentDateService {

  constructor() { }

  addCountDown(seconds: any) {
    let currentTime = seconds; // Default to 300 seconds = 5 minutes
    return currentTime;
  }

  addCurrentTime() {
    let currentTime = new Date().getTime() / 1000; // Turn to seconds
    return currentTime;    
  }
}
