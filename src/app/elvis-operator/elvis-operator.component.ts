import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent implements OnInit {

  pessoa: any = {
    nome: 'Joao',
    cargo: null,
  }

  constructor() { }

  ngOnInit() {
  }

}
