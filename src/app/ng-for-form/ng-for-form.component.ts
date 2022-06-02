import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  nome: string ="";
  endereco: string ="";
  telefone: string ="";
  cidade: string ="";
  idade: number = 0;

  cidades=[
    { name:"Alambari", estado :"SP"},
    { name:"Pirapozinho", estado :"SP"},
    { name:"P. Prudente", estado :"SP"},
    { name:"Tarabai", estado :"SP"}
  ];

  clients: Array<any> = [];
  

  constructor() { }

  ngOnInit(): void {
  
  }

  save() {
    this.clients.push(
      {
        nome: this.nome,
        endereco: this.endereco,
        telefone: this.telefone,
        cidade: this.cidade,
        idade: this.idade,

      }

    );
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.nome = "";
    this.endereco = "";
    this.cidade = "";
    this.idade = 0;
    this.telefone = "";
  }
 
  delete(i: number){
    this.clients.splice(i, 1);
  }
 

}
