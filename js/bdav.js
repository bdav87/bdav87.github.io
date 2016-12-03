//Document ready wrapper
$(function(){


$("#Skills").on("click", function() {
	$(".well p").text("Developer Skill Assessment");
	$(".skillArea").toggle(500);
})

$("#Music").on("click", function() {
	$(".well p").text("Music to my ears!");
	$("#musicArea").toggle(500);
})

$("#Leaf").on("click", function() {
	$(".well p").text("Plant a tree");
})

$("#Cog").on("click", function() {
	$(".well p").text("Gear");
})

$("#Bell").on("click",function() {
	$(".well p").text("Ding Dong!");
})

$("#Heart").on("click", function() {
	$(".well p").text("I heart you");
})


$('[data-toggle="tooltip"]').tooltip({animation:true});	



//End of document ready function
});

