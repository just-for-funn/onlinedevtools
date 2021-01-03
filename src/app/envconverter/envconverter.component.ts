import { Component, OnInit } from '@angular/core';
import { CodeData, CodeService } from '../services/code.service';
import {parse} from 'yaml'
@Component({
  selector: 'app-envconverter',
  templateUrl: './envconverter.component.html',
  styleUrls: ['./envconverter.component.css']
})
export class EnvconverterComponent implements OnInit {

  constructor(private condeService: CodeService) {

   }

  ngOnInit(): void {
    this.condeService.getSubject()
      .subscribe(o=>{
          this.parseCode(o);
          console.log(o.language , o.code);
      });
  }
  parseCode(o: CodeData) {
      let parsed = parse(o.code);
      console.log("parsed",parsed);
  }
    

}
