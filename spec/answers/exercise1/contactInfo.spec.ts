// Another way of writing tests where I have created the page object for this test file and 
// move the required logic to interact with Angular template, into it. In this case our spec file 
// will only have the assertion (expect) statements in the end.

import {ContactInfo} from "./contactInfo.page";

describe("Exercise 1 - ", () => {
    let screen: ContactInfo;

    beforeAll(() => {
        screen = new ContactInfo();
        screen.open();
    });

    it('should find element by model', function() {       
        expect(screen.emailInput.isPresent()).toBeTruthy();
    });

    it('should find element by binding', function() {
        expect(screen.phoneDisplay.isPresent()).toBeTruthy();
    });

    it('should get element text', function() {
        // Use element to get the text of a DOM node. For example: get Bruce Lee's
        // email address.
        expect(screen.emailDisplay.getText()).toMatch("bruce.lee@google.com")
    });

    it('should get input text', function() {
        // Use element to get the text of an input. For example: get the name,
        // email, or phone in the inputs.
        expect(screen.emailInput.getAttribute("value")).toMatch("bruce.lee@google.com");
    });

    it('should set input text', function() {
        // Use element to manipulate an input. For example: clear the name and
        // replace it with a new text value.
        screen.nameInput.clear();
        screen.nameInput.sendKeys("John Smith");

        expect(screen.nameInput.getAttribute("value")).toMatch("John Smith");
    });

    describe("when update the contact info detail - ", () => {
        it('should update contact information', function() {
            // Update the contact information.
            screen.nameInput.clear();
            screen.nameInput.sendKeys("Abel breath ");
        
            screen.save();
        
            // Verify the "Contact info" was updated.
            expect(screen.nameDisplay.getText()).toMatch("Abel breath");
        });
    });
});