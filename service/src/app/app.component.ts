import {Component} from '@angular/core';

import {PigLatinComponent} from './components/piglatin/piglatin.component';
import {AppHomeService} from './services/app-home.service'

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	styleUrls : ['app/app.component.css'],
	providers : [AppHomeService]
	
	
})

export class AppComponent {
private showMenu:boolean = false;

constructor(private AppHomeService: AppHomeService){}

setSharedValue() {
	this.showMenu = !this.showMenu
	this.AppHomeService.setOption(this.showMenu);
}


}
