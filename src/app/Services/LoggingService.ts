import {Injectable} from '@angular/core';

@Injectable()
export class LoggingService {

  logService(Sharevalue : any){
    console.log('Logging value: ' + Sharevalue);
  }
}
