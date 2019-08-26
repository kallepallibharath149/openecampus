import { Injectable } from '@angular/core';
import { ILogin } from '../LogInInterface/ILogin';


@Injectable({
  providedIn: 'root'
})
export class ServiveService {

obj:ILogin={
 
}

  constructor() {
    Object.defineProperty(this.obj,'logInStatus',{
      value: false,
      writable: false
    });
    
   }
logInStatusChange(data):void{
  Object.defineProperty(this.obj,'logInStatus',{ writable: true });
this.obj.logInStatus=data;
Object.defineProperty(this.obj,'logInStatus',{ writable: false });
}
 
}
