// How we should do it?

// I would say we should do the exercise in two ways. 
// 1. First we should write tests by having everything in the spec file such as the logic required 
//     to interact the angular template or use of protractor specific vocabularies(by.binding, by.model... etc)
//     to locate elements. 

// 2. Then we should create the page object for this test file and move the required logic to interact with
//     Angular template, into it. In this case our spec file will only have the assertion (expect) statements 
//     in the end.

// The minimum scenarios we could cover for exercise 1, are as:

// 1. Find a specific element by different locators e.g. by.binding, by.css, by.model etc. and check whether 
//     that element is present on the screen.
// 2. Get the input element and replace it existing value with the new value. Test whether the new value 
//      replaced the existing one. 
// 3. Replace the name, email address or phone no and then hit the save button. Test whether it updates 
//      the contact info detail.
// 4. Validates the email address.

import {ContactPage,customMatchers} from "./pageObject"


describe("when contact info page is open, ", () => {
    
    let contactPage : ContactPage;
    var ptor;
    let user = {
        name: 'Bruce Lee',
        email: 'bruce.lee@google.com',
        phone: '212 555 1234'
    };

    let user1 = {
        name: 'Bruce Lee',
        email: 'bruce.lee@google.com',
        phone: '212 555 1234'
    };

    let user2 = {
        name: 'Bruce Lee',
        email: 'bruce.lee@google.com',
        phone: '212 555 1234'
    };

    //test data Generator 
    function *getTestUser(){
       yield  user1;
       yield user2; 
    }

    beforeEach (()=>{
        jasmine.addMatchers(customMatchers);
    });

    beforeAll(() => {
        contactPage = new ContactPage(); 
         //ptor = protractor.getInstance();
    });


    describe("contact info, ",()=>{
        it("should have a Name" ,()=> {
            expect(contactPage.contactInfo.name.getText()).toBe(user.name);
        });
        it("should have a Email" ,()=> {
            expect(contactPage.contactInfo.email.getText()).toBe(user.email);
        });
        it("should have a Phone" ,()=> {
            expect(contactPage.contactInfo.phone.getText()).toBe(user.phone);
        });
    }); 

   describe("update info,", () => {
        it("should have a Name" ,()=> {
            expect(contactPage.updateInfo.name.getAttribute("value")).toBe(user.name);
        });
        it("should have a Email" ,()=> {
            expect(contactPage.updateInfo.email.getAttribute("value")).toBe(user.email);
        });
        it("should have a Phone" ,()=> {
           expect(contactPage.updateInfo.phone.getAttribute("value")).toBe(user.phone);
        });
    });

    describe("contact info,", () => {
        it("should have a new details when update info is updated, " ,()=> {
            contactPage.updateInfo.name.sendKeys("NewName");
            contactPage.updateInfo.email.sendKeys("NewName@mail.com");
            contactPage.updateInfo.phone.sendKeys("212 555 1222");
            expect(contactPage.contactInfo).deepEqual(contactPage.updateInfo);
        });         
    });

    describe("Updated Info, ", () => {
        it("On invalid email address should show error message" ,()=> {
            contactPage.updateInfo.email.sendKeys("notavalidmail");
            contactPage.clickSave();
            expect(contactPage.updateInfoEmailError.isDisplayed).toBeTruthy();
        });
        it("On invalid phone number should show error message" ,()=> {
             contactPage.updateInfo.phone.sendKeys("invalidphone");
             contactPage.clickSave();
             expect(contactPage.updateInfoPhoneError.isDisplayed).toBeTruthy();
        });
    });
  
   
});