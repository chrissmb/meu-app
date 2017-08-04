import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  
  @Output() mudouValor: EventEmitter<any> = new EventEmitter();
  
  @Input() numero: number = 0;
  
  increment() {
    this.numero++;
    this.mudouValor.emit({novoValor: this.numero});
  }
  
  decrement() {
    this.numero--;
    this.mudouValor.emit({novoValor: this.numero});
  }
  
  constructor() { }
  
  ngOnInit() {
  }

}
