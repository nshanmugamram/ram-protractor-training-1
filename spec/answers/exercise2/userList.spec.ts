// Another way of writing tests where I have created the page object for this test file and 
// move the required logic to interact with Angular template, into it. In this case our spec file 
// will only have the assertion (expect) statements in the end.

// Fluent Api 

import { element, by } from "protractor/built";
import { UserList } from "./userList.page";
import { UserRow } from "./userRow";

"use strict";

describe('Exercise2', function() {

    let userList: UserList;

    beforeAll(function() {
        userList = new UserList();
    });

    it('should find the user `Chuck Norris` in the list', function() {

        var user: UserRow = userList
            .userRows.find(UserRow.where.nameEq("Chuck Norris"));

        expect(user.name.getText()).toMatch("Chuck Norris");
        expect(user.email.getText()).toMatch("chuck@gmail.com");
    });
});