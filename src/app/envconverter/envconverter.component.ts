import { Component, OnInit } from '@angular/core';
import { CodeData, CodeService } from '../services/code.service';
import {parse} from 'yaml'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-envconverter',
  templateUrl: './envconverter.component.html',
  styleUrls: ['./envconverter.component.css']
})
export class EnvconverterComponent implements OnInit {

  
  keys: string[] = [];

  constructor(private condeService: CodeService) {

   }

  ngOnInit(): void {
    this.condeService.getSubject()
      .pipe(map(o=>this.convert(o)))
      .subscribe(o=>{
          this.keys = o;
      });
  }
  convert(convert: CodeData): string[] {
    return [
      "SERVER_NAME",
      "SERVER_PORT",
      "TEST_3"
    ];
  }
  parseCode(o: CodeData) {
      let parsed = parse(o.code);
      console.log("parsed",parsed);
  }
    

}
