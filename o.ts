import{Component,afterEveryRender,afterNextRender,input,inject,ElementRef,signal}from"@angular/core";import{NgComponentOutlet}from"@angular/common";
var r:any,O:any,l=["onOpen","onClose","onInit","onShow","onSourceLoad","disableLocalStorage","types","type","customAttributes","maxYoutubeVideoDimensions","autoplay","autoplays","loadOnlyCurrentSource","slideDistance","openOnMount","exitFullscreenOnClose","disableSlideSwiping","disableBackgroundClose","sourceMargin"];if(typeof window=="object"){O=require("../../../../1/1/o.js");r=1}function op(t:any){var j=t.sourceIndex();if(j===undefined)j=t.slide()-1;t.o.open(j||0)}
@Component({selector:"fslightbox",imports:[NgComponentOutlet],template:`@if(ob()){<div style="display:none">@for(e of s;track $index){@if(typeof e!="string"){<ng-container *ngComponentOutlet="e.component?e.component:e;inputs:e.inputs"></ng-container>}}</div>}`})
export class FsLightbox {
	[s: string]: any
	toggler=input();sources=input();slide=input();sourceIndex=input();onOpen=input();onClose=input();onInit=input();onShow=input();onSourceLoad=input();disableLocalStorage=input();types=input();type=input();customAttributes=input();maxYoutubeVideoDimensions=input();autoplay=input();autoplays=input();loadOnlyCurrentSource=input();slideDistance=input();openOnMount=input();exitFullscreenOnClose=input();disableSlideSwiping=input();disableBackgroundClose=input();sourceMargin=input();
	o:any=null;
	ob:any=signal(1);
	s:any=null;
	c:any=null;
	constructor() {var h=inject(ElementRef);
		afterEveryRender({read:()=>{if(!r)O=require("../../../../1/1/o.js");if(!this.c)return;var u;if(this.c.sources){/*this.o.close();*/this.o=new O.default();u=1;this.o.props.sources=(this.sources()as any).map((e:any)=>{if(typeof e=="string")return e;var p=h.nativeElement.firstChild,c=p.firstElementChild;p.removeChild(c);return c.firstChild})}this.ob.set(0);
for(var k of l){if(this.c[k]){if(!u){/*this.o.close();*/this.o=new O.default();u=1}this.o.props[k]=this.c[k].currentValue}}
if((this.c["toggler"]&&!this.c["toggler"].firstChange)||this.openOnMount())op(this);delete this.c
		}})
	}
	ngOnChanges(changes:any){this.s=this.sources()as any;if(changes.sources&&!changes.sources.firstChange)this.ob.set(1);this.c=changes}
}
