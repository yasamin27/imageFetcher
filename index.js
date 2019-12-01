var apiurl,myresult,apiurl_animal,tag;
apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1";
$(document).ready(function(){
$("#cat").click(function(){
tag = "cat";
})
});
$(document).ready(function(){
$("#dog").click(function(){
tag = "dog";
})
});
$(document).ready(function(){
$("#duck").click(function(){
tag = "duck";
})
});
$(document).ready(function(){
$("#horse").click(function(){
tag = "horse";
})
});
$(document).ready(function(){
$("#giraffe").click(function(){
tag = "giraffe";
})
});
$(document).ready(function(){
$("#mouse").click(function(){
tag = "mouse";
})
});
$(document).ready(function(){
$('#button').click(function(){
$.getJSON(apiurl,function(json){
$.each(json.photos.photo,function(i,myresult){
apiurl_animal = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a8b87a9ebd99fb824a8294167e84f5a8&tags='" + tag + "'&format=json&nojsoncallback=1";
$.getJSON(apiurl_animal,function(category){
$.each(category.photos.photo,function(i,animaResults){
  let imageUrl = 'http://farm' + animaResults.farm + '.staticflickr.com/' + animaResults.server + '/' + animaResults.id + '_' + animaResults.secret + '.jpg';
  $("#results").append('<p><a href="'+imageUrl+'" target="_blank"><img src="'+imageUrl+'"/></a></p>');
})
})
});
});
});
});
