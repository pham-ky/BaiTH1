import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitl2',
  templateUrl: './baitl2.component.html',
  styleUrls: ['./baitl2.component.css']
})
export class Baitl2Component implements OnInit {

  constructor() { }

  s=0;
  n: any;
  x: any;
  ngOnInit(): void {

  }
  tinh() {
    for(let i=1;i<=this.n;++i){
        this.s= this.s+ (Math.pow(-1,i))*(Math.pow(this.x,i)/Giaithua(i));
    }
  }

}
function Giaithua(a: number) {
  let gt=1;
  for (let i = 1; i <=a; i++) {
    gt*=i;
  }
  return gt;

}
