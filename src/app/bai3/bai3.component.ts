import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {

  constructor() { }
  thetich: any;
   a: any;
   b: any;
   h: any;
  ngOnInit(): void {
    // var hh = new HH(a,b,h);
    // console.log(hh.TheTich())
    // this.thetich=hh.TheTich();

  }
  tinh(){
    var hh = new HH(this.a,this.b,this.h);
    this.thetich=hh.TheTich();
  }

}
export class HCN {
  protected a:number;
  protected b:number;
  constructor(a:number,b:number){
    this.a=a;
    this.b=b;
  }
  public DienTich():number {
    return this.a*this.b;
  }
}
export class HH extends HCN {
  protected h:number;
  constructor(a:number,b:number, h: number){
    super(a,b);
    this.h = h;
  }
  public TheTich():number {
    return this.DienTich()*this.h;
  }

}
