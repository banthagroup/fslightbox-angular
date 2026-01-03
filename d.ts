import { Component } from '@angular/core';
import{FsLightbox}from "./o";import{A}from"./t/a"

@Component({
  selector: 'app-root',
  imports: [FsLightbox],
  template: `<fslightbox 
	[toggler]="toggler"
	[sources]="sources"
	[slide]="slide"
	[disableBackgroundClose]="1"
  /><button (click)="o(1)">1</button><button (click)="o(2)">2</button>`
})
export class D {
	toggler:any = 0
	slide:any = 1
	sources = ['/1.jpg','/2.mp4',{component:A,inputs:{t:"Z"}}]
	o(s:any){this.slide=s;this.toggler=!this.toggler}
}
