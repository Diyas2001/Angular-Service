import { Injectable } from '@angular/core';
import {LoggingService} from './LoggingService';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  constructor(
    private loggingService: LoggingService) { }

  getValue(){
    let Sharevalue : string;
    Sharevalue = 'This message from Shared Service';
    this.loggingService.logService(Sharevalue);
    return Sharevalue;
  }


}
