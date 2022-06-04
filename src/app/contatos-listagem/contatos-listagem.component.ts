import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos: Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.contatoService.listar().subscribe(dados => this.contatos = dados);
  }
  

}
