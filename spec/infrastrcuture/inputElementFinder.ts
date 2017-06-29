import { promise as wdpromise } from 'selenium-webdriver';
import {Locator} from 'protractor/built/locators';
import {ElementFinder, element} from "protractor";

export interface InputElementFinder extends RamElementFinder {

  getValue(): wdpromise.Promise<string>
  
  setValue<T>(...args: T[]): wdpromise.Promise<void>
}

export function inputElement<T>(locator: Locator, ele?: ElementFinder): InputElementFinder {

  let elem = ele ? ele.element(locator): element(locator);
  let obj:any = elem;
  obj.setValue = setValue;
  obj.getValue = getValue;
  obj.clearValue = clearValue;

  return elem as InputElementFinder;

  function getValue() {
    return elem.getAttribute('value');
  }

  function setValue(arg: T): void {
    let val: string;
    if (typeof arg === 'number') {
      val = (<number> arg).toString();
    } else {
      val = (arg || '').toString();
    }

    elem.clear();
    elem.sendKeys(val);
  }

  function clearValue() {
    return elem.clear();
  }
}

export interface RamElementFinder extends ElementFinder {
  clearValue(): wdpromise.Promise<void>;
}

