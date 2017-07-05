// The minimum scenarios we could cover at app level are:

// 1. Is application redirect to the /exercise1 when location hash/fragment is empty?
// 2. Is /exercise2 and /exercise3 views are rendered when user navigate to them.

import { browser,by,ExpectedConditions,element} from "protractor";

describe("End2End Tests App - ", () => {

        it("Should redirect to  /exercise1  when location hash/fragment is empty",()=>{
            browser.get("http://localhost:9000");
            ExpectedConditions.urlIs("http://localhost:9000/#/exercise1")
           
        });

        it("Should not redirect to  /exercise1  when location hash/fragment is not empty",()=>{
            browser.get("http://localhost:9000/#/exercise2");            
            ExpectedConditions.not(ExpectedConditions.urlIs("http://localhost:9000/#/exercise1"));
        });
      
        it("Should navigate to  exercise2  when user clicks link 'Exercise 2'",()=>{
            browser.get("http://localhost:9000"); 
            element(by.linkText('Exercise 2')).click();
            ExpectedConditions.urlIs("http://localhost:9000/#/exercise2") 
        });
        it("Should not navigate to  exercise2  when user clicks link 'Exercise 3'",()=>{
            browser.get("http://localhost:9000"); 
            element(by.linkText('Exercise 3')).click(); 
            ExpectedConditions.not(ExpectedConditions.urlIs("http://localhost:9000/#/exercise2")); 
        }); 

});