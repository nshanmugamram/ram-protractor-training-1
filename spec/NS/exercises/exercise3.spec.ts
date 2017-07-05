// I would say we should do the exercise in two ways. 
// 1. First we should write tests by having everything in the spec file such as the logic required 
//     to interact the angular template or use of protractor specific vocabularies(by.binding, by.model... etc)
//     to locate elements. 

// 2. Then we should create the page object for this test file and move the required logic to interact with
//     Angular template, into it. In this case our spec file will only have the assertion (expect) statements 
//     in the end.

// The minimum scenarios we could cover for exercise 1, are as:
// 1. Test the scenario where save button should be enabled when required information entered, 
//     (Name and Email Address)
// 2. Test the scenario, where the user get added to the list grid when save new user detail.

import {UserManagementPage} from './pageObject'
describe("User Management, ", () => {

    var userManagementPage : UserManagementPage;

    beforeAll(()=>{
userManagementPage
    });

    it("Add user should display new user info screen",()=>{

    });

    it("New user info, should enable save button, when all mandatory fields are entered and it is valid",()=>{

    });

    it("New user info, should disable save button, when all mandatory fields are not entered",()=>{

    });

    it("New user info, should disable save button, when all mandatory fields are entered and it is not valid",()=>{

    });

    it("New user info, should show list after save button click",()=>{

    });
});