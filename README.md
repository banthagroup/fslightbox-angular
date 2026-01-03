# Angular Fullscreen Lightbox Basic

## Description
An Angular component for displaying images, videos, or, through custom sources, anything you want in a clean overlying box.
The project's website: https://fslightbox.com.

| Dependency | Version |
| --- | --- |
| @angular/core | at least 20.0.0 |
| @angular/common | at least 20.0.0 |

## Installation
### Through a package manager
```
npm install fslightbox-angular
```
### Or, through an archive downloaded from the website
The .tgz archive, in its entirety, should be put somewhere in the end project, for example, "./src/lib". Then run the package manager's install command with the path to that archive. The command have to be run from the directory where your project's "package.json" file is.
``` 
$ npm install ./src/lib/[lightbox archive name] 
```
For example:
``` 
$ npm install ./src/lib/fslightbox-angular-1.0.0.tgz
```

## Basic usage 
```ts
import { Component } from "@angular/core";
import { FsLightbox } from "fslightbox-angular";
import { Text } from "./Text";

@Component({
	selector: 'app-root',
	imports: [FsLightbox],
	template: `<div>
		<fslightbox 
			[toggler]="toggler"
			[slide]="slide"
			[sources]="sources"
  		/>
		<button (click)="open(1)">
			The first slide
		</button>
		<button (click)="open(2)">
			The second slide
		</button>
	</div>`
})
export class Demo {
	toggler = false
	slide = 1
	sources = [
		'https://i.imgur.com/fsyrScY.jpg',
		'https://www.youtube.com/watch?v=xshEZzpS4CQ',
		'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
		{
			component: Text,
			inputs: {
				value: "An example message"
			}
		}
	]
	open(n : number) {
		this.slide = n;
		this.toggler = !this.toggler
	}
}
```

## Documentation
Available at: https://fslightbox.com/angular/documentation.

## Demo
Available at: https://fslightbox.com/angular.

## Browser Compatibility
| Browser | Works? |
| --- | --- |
| Chrome | Yes |
| Firefox | Yes |
| Safari | Yes |
| Edge | Yes |
