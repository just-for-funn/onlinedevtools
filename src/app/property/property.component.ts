import { Component, OnInit } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { interval, Observable } from 'rxjs';

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
  code:string =  '';
  constructor() { }

  ngOnInit(): void {
      interval(3000)
          .subscribe(o=>console.log(o , this.code));
  }

}
