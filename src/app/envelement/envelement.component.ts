import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-envelement',
  templateUrl: './envelement.component.html',
  styleUrls: ['./envelement.component.css']
})
export class EnvelementComponent implements OnInit {

  @Output()
  onSelected  = new EventEmitter<string>(); 

  @Input()
  env: string = "";

  constructor() { }

  

  ngOnInit(): void {
  }

  fireSelected(){
    console.log("clicked");
    this.onSelected.emit(this.env);
  }

}
