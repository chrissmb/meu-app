import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meu-elemento',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input() nome: string;

  constructor() { }

  ngOnInit() {
  }

}
