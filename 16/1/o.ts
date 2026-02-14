import{Component,afterRender,Input,inject,ChangeDetectorRef,ElementRef}from"@angular/core";import{NgIf,NgFor,NgComponentOutlet}from"@angular/common";var r:any,l=["onOpen","onClose","onInit","onShow","onSourceLoad","disableLocalStorage","types","type","customAttributes","autoplay","autoplays","loadOnlyCurrentSource","slideDistance","openOnMount","exitFullscreenOnClose","disableSlideSwiping","disableBackgroundClose","sourceMargin","useDialog"];function rq(){r=1;require("../../../../1/1/w.js")}if(typeof window=="object")rq();function op(t:any){var j=t.sourceIndex;if(t.slide!=0)j=t.slide-1;t.o.open(j)}@Component({standalone:true,selector:"fslightbox",imports:[NgIf,NgFor,NgComponentOutlet],template:`<div *ngIf="ob" style="display:none"><div *ngFor="let e of sources"><div *ngIf="io(e)"><ng-container *ngComponentOutlet="e.component?e.component:e;inputs:e.inputs"></ng-container></div></div></div>`
})
export class FsLightbox {
	[s: string]: any
	@Input()toggler=false;@Input()sources=[]as any;@Input()slide=0;@Input()sourceIndex=0;@Input()onOpen=(o:any)=>{};@Input()onClose=(o:any)=>{};@Input()onInit=(o:any)=>{};@Input()onShow=(o:any)=>{};@Input()onSourceLoad=(o:any,s:any,i:number)=>{};@Input()disableLocalStorage=false;@Input()types=[]as Array<string|null>;@Input()type="";@Input()customAttributes=[]as any;@Input()autoplay=false;@Input()autoplays=[]as boolean[];@Input()loadOnlyCurrentSource=false;@Input()slideDistance=0.3;@Input()openOnMount=false;@Input()exitFullscreenOnClose=true;@Input()disableSlideSwiping=false;@Input()disableBackgroundClose=false;@Input()sourceMargin=0.05;@Input()useDialog=false;
	o:any=null;
	ob:any=1;
	c:any=null;
	constructor() {var re=inject(ElementRef),cdr=inject(ChangeDetectorRef);
		afterRender(()=>{if(!this.c)return;if(!r)rq();var u,p;if(this.c.sources){/*this.o.close();*/if(!this.c.sources.firstChange)p=this.o.props;this.o=new(window as any).FsLightboxB();u=1;if(p)this.o.props=Object.assign({},p);this.o.props.sources=(this.sources as any).map((e:any,i:any)=>{var p=re.nativeElement.firstChild,c=p.children[i];if(typeof e=="string")return e;return c.firstChild.firstChild.firstChild});setTimeout(()=>{this.ob=0;cdr.detectChanges()})}
for(var k of l){if(this.c[k]){if(!u){/*this.o.close();*/p=this.o.props;this.o=new(window as any).FsLightboxB();this.o.props=Object.assign({},p);u=1}this.o.props[k]=this.c[k].currentValue}}
if((this.c.toggler&&!this.c.toggler.firstChange)||(this.openOnMount&&(this.c.sources&&this.c.sources.firstChange)))op(this);delete this.c
		})
	}
	ngOnChanges(changes:any){if(changes.sources&&!changes.sources.firstChange)this.ob=1;this.c=changes}
	io(e:any){return typeof e!="string"}
}
