import { Component, OnInit } from '@angular/core';
import { CodeService } from '../services/code.service';

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
          console.log(o.language , o.code);
      });
  }

}
