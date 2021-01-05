import { Component, Input, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-envelement',
  templateUrl: './envelement.component.html',
  styleUrls: ['./envelement.component.css']
})
export class EnvelementComponent implements OnInit {

  @Input()
  env: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
