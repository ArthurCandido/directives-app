import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  showName: boolean= false;
  showAddress: boolean= false;
  showPhone: boolean= false;  
  showAge: boolean= false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
