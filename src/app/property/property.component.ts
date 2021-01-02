import { Component, OnInit } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { interval, Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CodeService } from '../services/code.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  editorOptions = {
    theme: 'vs-dark', 
    language: 'yaml',
    formatOnType: true,
    formatOnPaste: true
  };
  
  private _code:string = '';
  codeSubject: Subject<string> = new Subject<string>(); 

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
      this.codeSubject
        .pipe(debounceTime(500))
        .subscribe(o=> {
          this.notify(o);
        });
  }


  private notify(o: string) {
    this.codeService.onCodeChanged({
      code: o,
      language: "yaml"
    });
  }

   get code(){
     return this._code;
   }

   set code(arg:string){
     //console.log("setting" , arg);
     this._code = arg;
     this.codeSubject.next(arg);
   }


  

}
