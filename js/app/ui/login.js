//

CYC.ui.Login = (function($){
	var thisObj = this;
    
    function init() {
        _bindEvents();
    }
    
    function login(email, password) {    
    	$.post(
    		CYC.config.baserUrl + "services/account/login", 
    		{email: email, password: passowrd}
    		).success(function() {
    			// redirect to listing page from here
    			
    		})
    		.error(function() {
    			// handle failure. maybe display a message
    		});  
        return true;
    }
    
    // Do your jquery binding here
    function _bindEvents() {        
        $("#signin").click(function () {
        	var email = $("#email").val();
        	var pass = $("#password").val();
        	
        	login(email, pass);
        });
    }

    return {
        init: init,
        login: login
    };
})(jQuery);

$(document).ready(CYC.ui.Login.init);
