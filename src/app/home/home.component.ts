import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `
  // <p>Home Works!!</p>
  // <h3>Hello from H3</h3>
  // `,
  styleUrls: ['./home.component.css']
  // styles: [
  //   'div#demo {color:red;border-style:solid;border-color:gray;width:200px;height:40px;}',

  // ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
