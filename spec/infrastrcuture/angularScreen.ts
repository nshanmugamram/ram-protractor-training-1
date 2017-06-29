import {ElementFinder, browser} from 'protractor';

export class AngularScreen {
    
    constructor(private url: string) {
        browser.get(this.url);
    }
}    


 
