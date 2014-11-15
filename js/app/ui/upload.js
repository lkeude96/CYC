CYC.ui.ImageUploader = (function($){
	var thisObj = this;
	
	function init() {
		
	}
    
    function uploadImage(imageInfo) {        
        return true;
    }
    
    return {
    	init: init,
        uploadImage: uploadImage
    };
})(jQuery);

$(document).ready(CYC.ui.ImageUploader.init);