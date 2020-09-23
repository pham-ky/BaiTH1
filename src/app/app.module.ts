import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Baitl1Component } from './baitl1/baitl1.component';
import { Baitl2Component } from './baitl2/baitl2.component';
import { Baitl3Component } from './baitl3/baitl3.component';
import { Baitl4Component } from './baitl4/baitl4.component';
import { Baitl5Component } from './baitl5/baitl5.component';
import { Baitl6Component } from './baitl6/baitl6.component';
import { Baitl7Component } from './baitl7/baitl7.component';
import { Baitl8Component } from './baitl8/baitl8.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Bai1',
    component: Bai1Component,
  },
  {
    path: 'Bai2',
    component: Bai2Component,
  },
  {
    path: 'Bai3',
    component: Bai3Component,
  },
  {
    path: 'Baitl1',
    component: Baitl1Component,
  },
  {
    path: 'Baitl2',
    component: Baitl2Component,
  },
  {
    path: 'Baitl3',
    component: Baitl3Component,
  },
  {
    path: 'Baitl4',
    component: Baitl4Component,
  },
  {
    path: 'Baitl5',
    component: Baitl5Component,
  },
  {
    path: 'Baitl6',
    component: Baitl6Component,
  },
  {
    path: 'Baitl7',
    component: Baitl7Component,
  },
  {
    path: 'Baitl8',
    component: Baitl8Component,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    Baitl1Component,
    Baitl2Component,
    Baitl3Component,
    Baitl4Component,
    Baitl5Component,
    Baitl6Component,
    Baitl7Component,
    Baitl8Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
