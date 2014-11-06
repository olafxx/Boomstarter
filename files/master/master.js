
var master = function(options){


	  var create = function(projectName) {
	  
	     // var options = bd.getData();
		  return template("tmp1", projectName);
		
	  };
	  
	  
	  var save = function(form) {
		
		  options = getFormItems(form);
		  bd.setData(options);	
		  edit(options);
		  preview(options)
		  
	  };
    
	  var preview = function(options) {
	 
		 for(key in options){
 			$("#"+key).text(options[key]);
		 }
		 
	  };
    
	  var edit = function(options) {
	 
		 for(key in options){
 			$("[name="+key+"]").attr("value",options[key]);
		 }
		 
	  };
    
	
	  var mDelete = function() {
	    // Удалить проект
	  };
	  
	  
	  var list = function() {
	    //Вывести список проектов
	  };
	  
	  
 	  var getFormItems = function(form){
	 
			var self = $(form);
			
			var options = [];
 			options["nameProject"] = self.find("[name=nameProject]").val();
 			options["categorySelected"] = self.find("[name=categorySelected]").val();
 			options["wallpaper"] = self.find("[name=wallpaper]").val();
 			options["preamble"] = self.find("[name=preamble]").val();
 			options["info"] = self.find("[name=info]").val();
		   
			return options;
     }
	 
 
	return {
	   create:create,
 	   edit:edit,
 	   preview:preview,
 	   save:save,
// Если развивать приложение, можно реализовать методы:
 	   mDelete:mDelete,
	   list:list
 	}
}


