 

var template = function(templ, nameProject, categorySelected, wallpaper, preamble, info){
	 
	var templDefault = "tmp1"
 	
	var settings = {
		"templ": (templ === undefined ) ? templDefault : templ,
		"nameProject": (nameProject === undefined ) ? "" : nameProject,
		"category": ["Музыка","Видео"],
		"categorySelected": (categorySelected === undefined ) ? "" : categorySelected,
		"wallpaper": (wallpaper === undefined ) ? "files/images/wallpaper.png" : wallpaper,
		"preamble": (preamble === undefined ) ? "" : preamble,
		"info": (info === undefined ) ? "..." : info,
		}

 
	
   switch (settings.templ) {
   
	  case templDefault:
	  
		   var templ = '<div class="master">\
		   \
				<div class="master__tab">\
				   <a href="#id1" class="current">Основное</a>\
				   <a href="#id2">Информация</a>\
				</div>\
				\
				 <div id="id1">\
				 \
				   <form class="form1" id="master__form1" action="#" method="post" onsubmit="project.save(this);return false;">\
				   \
						<div class="master__content">\
							\
							<h2>Мастер создания проекта</h2>\
							\
							<div class="grid">\
								\
								<div class="grid__col-3">\
									Категория\
								</div>\
								\
								<div class="grid__col-3-2 right">\
									<select name="categorySelected">\
									   <option value="music">Музыка</option>\
									   <option value="video">Видео</option>\
									</select>\
								</div>\
								<div class="clear"></div>\
							\
								<div class="grid__col-3">\
									Название\
								</div>\
								\
								<div class="grid__col-3-2">\
									<input type="text" name="nameProject" value="'+settings.nameProject+'" >\
								</div>\
								<div class="clear"></div>\
							\
								<div class="grid__col-3">\
									Обложка\
								</div>\
								\
								<div class="grid__col-3-2">\
									<img src="'+settings.wallpaper+'" alt="" width="100" > <br/>\
									<input name="wallpaper" type="file" value="Загрузить картинку" >\
								</div>\
								<div class="clear"></div>					\
								\
								<div class="grid__col-3">\
									Краткое описание\
								</div>\
								\
								<div class="grid__col-3-2">\
									<textarea  name="preamble">'+settings.preamble+'</textarea>\
								</div>\
								<div class="clear"></div>\
							\
							</div>\
							\
						</div>\
						\
						<div class="master__prev">\
							\
							<h2>Предпросмотр</h2>\
							\
							<div class="item">\
							\
							   <div class="item__foto">\
							   <img src="files/images/prev.jpg" alt="" width="100%" >\
							   </div>\
							   \
							   <div class="item__desc">\
									<h2>Название</h2>\
									<p>Support from our corporate members makes it possible for the jQuery Foundation to continue our work on our JavaScript libraries and pushing the open web forward with events and participation in the standards process. View our members page for a full list of corporate and individual members.</p>\
							   </div>\
							\
							</div>\
							\
						</div>\
						\
						<div class="separation"></div>\
						\
						<input type="reset" value="Сбросить изменения"/>\
						<input type="submit"  value="Сохранить"/>\
						\
					</form>\
					\
					<div class="clear"></div>\
				</div>\
		   \
				 <div id="id2" class="hide" name="info">'+settings.info+'</div>	\
		   </div>';
		   break;
		   
		case "tmp2":
		   // Другой шаблон
		   break;
		   
   }
	
	
   return templ;
}