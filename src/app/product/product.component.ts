import { Component, OnInit } from '@angular/core';
declare const getRandomNumbers: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  rNum = <[]>getRandomNumbers().filter((x: number) => x < 2000);
  // .sort(function (x: number, y: number) {
  //   return x - y;
  // });
  page: number = 1;
  itemsToDisplay: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(event: number | undefined) {
    this.page = Number(event);
  }

}


