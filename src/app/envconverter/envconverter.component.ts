import { Component, OnInit } from '@angular/core';
import { CodeData, CodeService } from '../services/code.service';
import {parse} from 'yaml'
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { YamlToEnv } from './yaml-to-env';
import { Observable, of } from 'rxjs';
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
      .pipe(
        tap(o=> console.log('received new will parse')),
        switchMap(o=> this.parseNonFailing(o))
      )
      .subscribe(o=>{
          this.keys = o;
      });
  }
  parseNonFailing(o: CodeData): Observable<string[]> {
    return of(o)
          .pipe(
              map(o=> YamlToEnv.convertToEnvList(o.code)),
              catchError(err=>{
                console.error('parsing failed');
                return [];
              })
          );
  }
  convert(convert: CodeData): string[] {
    //return YamlToEnv.convertToEnvList(convert.code);
    throw 'test';
  }
  parseCode(o: CodeData) {
      let parsed = parse(o.code);
      console.log("parsed",parsed);
  }
    

}
