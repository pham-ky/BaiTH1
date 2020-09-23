import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitl5',
  templateUrl: './baitl5.component.html',
  styleUrls: ['./baitl5.component.css']
})
export class Baitl5Component implements OnInit {

  constructor() { }

  s=[5,363,8,97,25,6,9,48,26,81];
   chinhphuong = [];
  ngOnInit(): void {
    let sochinhphuong = (n) =>{
      return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
    }
    this.chinhphuong = this.s.filter(sochinhphuong);
  }

}
