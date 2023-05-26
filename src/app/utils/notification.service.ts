import { Injectable } from '@angular/core';
declare let jQuery : any;
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
    //method
   }

  smallBox(data, cb?) {
    jQuery.smallBox(data, cb)
   }

   bigBox(data, cb?) {
      jQuery.bigBox(data, cb)
   }

   smartMessageBox(data, cb?) {
    jQuery.SmartMessageBox(data, cb)
   }
}
