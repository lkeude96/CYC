// This file contains the ajax method calls to backend services

CYC.ui.Login = (function($){
	var thisObj = this;
    
    function init() {
        _bindEvents();
    }
    
    function login(email, password) {        
        return true;
    }
    
    // Do your jquery binding here
    function _bindEvents() {        
        $("").click(function () {
        	
        });
    }

    return {
        init: init,
        login: login
    };
})(jQuery);

$(document).ready(CYC.ui.Login.init);
