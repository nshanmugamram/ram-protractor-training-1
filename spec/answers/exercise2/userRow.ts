import { ElementFinder, by } from "protractor/built";
import { promise as wdpromise } from 'selenium-webdriver';

export class UserRow {
    
    constructor(public row: ElementFinder) { }
    
    name = this.row.element(by.binding("row.name"));
    email = this.row.element(by.binding("row.email"));
    phone = this.row.element(by.binding("row.phone"));

    static where = {
        nameEq(name: string): (row: UserRow) => wdpromise.Promise<boolean> {
            return (r: UserRow) => r.name.getText().then((n) => n === name);
        }
    }
}