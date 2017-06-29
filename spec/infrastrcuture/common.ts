import {ElementFinder, promise, browser, element} from 'protractor';

export class Common {
    
    
    /**
     * Schedule a command to set the spcified text on the given input element
     */
    static setTextInElement(inputElement: ElementFinder, text: string) {
        
        inputElement.clear();
        inputElement.sendKeys(text);
        
        return inputElement.getAttribute('value').then(insertedValue => {
            if(insertedValue !== text) {
                Common.setTextInElement(inputElement, text)
            }
            return promise.fulfilled(insertedValue);
        });
    }
    
    /**
     * Construct the binding expressing for the specified range variable and field
     * 
     * @view
     * <div> {{ user.name }} </div>
     * 
     * @example
     * rangeVar = "user" field = "name"
     * @return "user.name"
     */
     static constFieldBindingExp = (rangeVar: string, field: string) => { 
        return `${rangeVar}.${field}`;
    }

    /**
     * Construct the attribute expression for the specified attribute and its text value
     * 
     * @view 
     * <div id="foo" class="bar"></div>
     * 
     * @example
     * attribute = "class" text = "bar"
     * @return: '[class="bar"]'
     */
    static constAttributeExp(attribute: string, text: string)  {
        return `[${attribute}='${text}']`;
    }

    /**
     * Converts a date to a string using the specified formatting. 
     * 
     * @default 
     * format is 'dd/mm/yyyy'
     */
    static toDateString(date: Date, format: string="dd/mm/yyyy") {

        // Integer value representing the year 
        const year = date.getFullYear();
        // Integer value representing the month, beginning with 0 for January to 11 for December
        const month = date.getMonth() + 1;
        // Integer value representing the day of the month.
        const day = date.getDate();

        if(format == "mm/dd/yyyy") {
            return month  + "/" + day + "/" + year;
        } else if(format == "yyyy/mm/dd") {
            return year + "/" + month  + "/" + day;
        } 
        return day + "/" + month  + "/" + year;
    }

    /**
     * Returns the random number.
     */
    static generateRandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }

    /**
     * Returns the random date between the specified start and end date
     */
    static generateRandomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}
