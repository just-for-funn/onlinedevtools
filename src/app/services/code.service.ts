import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


export class CodeData{
  code: string;
  language: string;
}

@Injectable({
  providedIn: 'root'
})
export class CodeService {
   private code: Subject<CodeData> = new Subject(); 
  constructor() { }


  onCodeChanged(data: CodeData){
    this.code.next(data);
  }

   getSubject(): Observable<CodeData>{
     return this.code;
   }

}
