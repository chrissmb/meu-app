import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  nomePortal: string;
  cursos: string[];

  constructor() {
    this.nomePortal = "http://www;pudim.com.br";
    this.cursos = ["Java", "C++", "Haskell"];
  }

  ngOnInit() {
  }

}
