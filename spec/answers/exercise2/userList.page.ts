import { promise as wdpromise } from 'selenium-webdriver';
import { ItemList } from "../../infrastrcuture/itemList";
import {browser, element, by, ElementArrayFinder, ElementFinder} from "protractor";
import { AngularScreen } from "../../infrastrcuture/angularScreen";
import { UserRow } from "./userRow";

export class UserList extends AngularScreen {

    constructor() {
        super("#/exercise2");
    }

    /**
     * Table rows displaying the set of users
     */
    userRows = new UserRowList(element.all(by.repeater("row in ctrl.userList")));
    
    /**
     * Table element displaying the set of users; 
     * note: {@userRows} provides a better API for working with the individual table rowss
     */
    userTable = element(by.css("table"));
}

class UserRowList extends ItemList<UserRow, UserRowList> {

    protected create(items: ElementArrayFinder) {
        return new UserRowList(items);
    }

    protected wrap(item: ElementFinder) {
        return new UserRow(item);
    };
}


