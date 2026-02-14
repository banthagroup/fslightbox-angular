import{Component,afterEveryRender,input,inject,ElementRef,signal}from"@angular/core";import{NgComponentOutlet}from"@angular/common";var r:any,l=["onOpen","onClose","onInit","onShow","onSourceLoad","disableLocalStorage","types","type","customAttributes","maxYoutubeVideoDimensions","autoplay","autoplays","loadOnlyCurrentSource","slideDistance","openOnMount","exitFullscreenOnClose","disableSlideSwiping","disableBackgroundClose","sourceMargin","useDialog"];function rq(){r=1;require("../../../../1/1/w.js")}if(typeof window=="object")rq();function op(t:any){var j=t.sourceIndex();if(j===undefined)j=t.slide()-1;t.o.open(j||0)}
@Component({selector:"fslightbox",imports:[NgComponentOutlet],template:`@if(ob()){<div style="display:none">@for(e of s;track $index){@if(typeof e!="string"){<ng-container *ngComponentOutlet="e.component?e.component:e;inputs:e.inputs"></ng-container>}}</div>}`})
export class FsLightbox {
	[s: string]: any
	toggler=input();sources=input();slide=input();sourceIndex=input();onOpen=input();onClose=input();onInit=input();onShow=input();onSourceLoad=input();disableLocalStorage=input();types=input();type=input();customAttributes=input();maxYoutubeVideoDimensions=input();autoplay=input();autoplays=input();loadOnlyCurrentSource=input();slideDistance=input();openOnMount=input();exitFullscreenOnClose=input();disableSlideSwiping=input();disableBackgroundClose=input();sourceMargin=input();useDialog=input();
	o:any=null;
	ob:any=signal(1);
	s:any=null;
	c:any=null;
	constructor() {var h=inject(ElementRef);
		afterEveryRender({mixedReadWrite:()=>{if(!r)rq();if(!this.c)return;var u,p;if(this.c.sources){if(!this.c.sources.firstChange)p=this.o.props;this.o=new(window as any).FsLightboxB();u=1;if(p)this.o.props=Object.assign({},p);this.o.props.sources=(this.sources()as any).map((e:any)=>{if(typeof e=="string")return e;var pa=h.nativeElement.firstChild,c=pa.firstElementChild;pa.removeChild(c);return c.firstChild})}this.ob.set(0);
for(var k of l){if(this.c[k]){if(!u){p=this.o.props;this.o=new(window as any).FsLightboxB();this.o.props=Object.assign({},p);u=1}this.o.props[k]=this.c[k].currentValue}}
if((this.c.toggler&&!this.c.toggler.firstChange)||this.openOnMount())op(this);delete this.c
		}})
	}
	ngOnChanges(changes:any){this.s=this.sources()as any;if(changes.sources&&!changes.sources.firstChange)this.ob.set(1);this.c=changes}
}
