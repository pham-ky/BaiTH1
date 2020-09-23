import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }

  listNT: number[] ;
  ngOnInit(): void {
    var list1: number[] ;
    var list: number[] ;
    list1 = [4,11,45,3,13,50,7,60,77];
    list = list1.sort((a,b)=>a-b);
    var checkNT = (n:number) => {
      let ok = true;
      for(let i=2;i<n;++i)
      if(n%i==0){
        ok=false;
        break;
      } 
      return ok;
    }
    this.listNT = list.filter(x=>checkNT(x)); 
  }
}
