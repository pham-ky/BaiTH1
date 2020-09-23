import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitl5',
  templateUrl: './baitl5.component.html',
  styleUrls: ['./baitl5.component.css']
})
export class Baitl5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let sochinhphuong = (n) =>{
      return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
    }
    let s = [3,4,8,10,25,55].filter(sochinhphuong);
    console.log(s);
  }

}
