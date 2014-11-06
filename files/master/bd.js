

var supports_html5_storage = function() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
} catch (e) {
    return false;
  }
}

if(!supports_html5_storage()) alert("HTML5-хранилище не поддерживается");


var storage = function(){
	 
	var setData = function(option){
	
		 for(key in option){
 			localStorage.setItem(key,option[key]);
		 }
		 
	}
	
	
	var getData = function(){
		
		var result = [];
	 
		 for(key in localStorage){ 
  			result[key]=localStorage.getItem(key);
 		 }
 
	    return result;
	}

	
	return {
	  setData:setData,
	  getData:getData
	}
	
}

var bd = new storage();



