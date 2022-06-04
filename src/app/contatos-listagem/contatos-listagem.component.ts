import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos = [
    {"id": 1, "nome": "Isac", "telefone":"123"},
    {"id": 2, "nome": "Maria", "telefone":"678"}
  ];

  constructor() { }

  ngOnInit(): void {

 

  }
  

}
