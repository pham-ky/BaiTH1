import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitl8',
  templateUrl: './baitl8.component.html',
  styleUrls: ['./baitl8.component.css']
})
export class Baitl8Component implements OnInit {

  constructor() { }

  h: any;
  dt: any;
  kq: any;
  ngOnInit(): void {

  }
  tinh(){
    this.kq= (this.h*this.dt)/3;
  }

}
