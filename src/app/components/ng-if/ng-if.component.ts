import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
title: string;
isTimeForThisComponent: boolean;

  constructor() {
    console.log("wywołanie konstruktora");
    this.isTimeForThisComponent = false;
    if(this.isTimeForThisComponent){
      this.title= 'Tematem tego wpisu jest dyrektywa ng-if';
    }
    else{
      this.title= 'Tematem tego wpisu nie jest dyrektywa ng-if';
    }
   }


  ngOnInit(): void {
  }

}
