import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class AppHomeService {

    private showMenu = new Subject<boolean>();
    
    showMenu$ = this.showMenu.asObservable();
  

    setOption(value:boolean) {
        this.showMenu.next(value);
       }
}