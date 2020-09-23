import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitl1',
  templateUrl: './baitl1.component.html',
  styleUrls: ['./baitl1.component.css']
})
export class Baitl1Component implements OnInit {

  constructor() { }
  s=0;
  n: any;
  x: any;
  ngOnInit(): void {

  }
  tinh(){
    for(let i=1;i<=this.n;++i){
      this.s += Math.pow(this.x,i);
    }
  }
}
