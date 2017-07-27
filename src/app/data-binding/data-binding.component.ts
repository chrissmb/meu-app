import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://www.pudim.com.br/";
  urlImagem: string = 'https://mancilha.files.wordpress.com/2008/09/teste2.png';

  getValor() {
    return 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
