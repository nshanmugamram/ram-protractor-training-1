let customMatchers: jasmine.CustomMatcherFactories = {
	toBeForm: function() {
        return {
            compare: function (actual: any,expected:any) {
                let isMatch  = false;
                
                var message ="";
                if (!isMatch) message = "Not Same";

                return {
                    pass: isMatch,
                    message: message
                }
            }
        };
    }, 
     

};
 
export { customMatchers };