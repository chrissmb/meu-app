import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://www.pudim.com.br/";
  urlImagem: string = 'https://mancilha.files.wordpress.com/2008/09/teste2.png';
  palavra: string;
  mouseSobre: boolean = false;

  getValor() {
    return 1;
  }

  alertaClick() {
    alert("clicou no botão");
  }

  enterCampo(digitado) {
    this.palavra = digitado;
  }

  alteraCampo(evento) {
    console.log(
      "Key = " + evento.key
      + " valor do campo = " + evento.target.value
    );
  }

  mouseSobreFora() {
    this.mouseSobre = !this.mouseSobre;
  }

  constructor() { }

  ngOnInit() {
  }

}