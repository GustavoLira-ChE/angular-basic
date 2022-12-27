import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("John","Doe","john@email.com", 500),
    new SalesPerson("Claire","Murphy","claire@email.com",600),
    new SalesPerson("Alan","Brito","alan@email.com",400)
  ];
  constructor(
  ){

  }

  ngOnInit(): void {
      
  }
}
