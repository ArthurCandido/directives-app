import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  constructor() { }

  users=[
    {login:"Bob",role:"admin" , lastlogin: new Date ('2/1/2022')},
    {login:"Arthur",role:"user" , lastlogin: new Date ('2/23/2022')},
    {login:"Joao",role:"admin" , lastlogin: new Date ('3/30/2022')},
    {login:"Fausto",role:"user" , lastlogin: new Date ('2/12/2022')},

  ]


  

  ngOnInit(): void {
  }

}
