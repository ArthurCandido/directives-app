import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  fSize = '20px';
  fColor = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
