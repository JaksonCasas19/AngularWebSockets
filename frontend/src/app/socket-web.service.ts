import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketWebService extends Socket{
//Extend para obtener la configuración de la libreria de socket
  constructor() { 
    super({
      url: '' //Url de nuestro backend
    })
  }
}
