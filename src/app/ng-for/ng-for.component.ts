import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names=[
    "Arthur",
    "John",
    "Jane",
    "Fausto"
  ];

  cidades=[
    { name:"Alambari", estado :"SP"},
    { name:"Pirapozinho", estado :"SP"},
    { name:"P. Prudente", estado :"SP"},
    { name:"Tarabai", estado:"SP"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
