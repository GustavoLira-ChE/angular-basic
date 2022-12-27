import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("John","Doe","john@email.com", 50000),
    new SalesPerson("Claire","Murphy","claire@email.com",60000),
    new SalesPerson("Alan","Brito","alan@email.com",40000)
  ];
  constructor(
  ){

  }

  ngOnInit(): void {
      
  }
}
