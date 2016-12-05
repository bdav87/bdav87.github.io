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

$(".card img").on("click", function(){
	var imageZoom = this.src;
	$("#caption").text($(this).attr("alt"));
	$("#img01").attr("src", imageZoom);
	$("#myModalz").css("display", "block");

})

$(".closer").on("click", function(){
	$(".modalz").hide();
})

$(".modalz").on("click", function(){
	$(this).hide();
})

$(document).on("keyup", function(e){
	if (e.keyCode == 27) {
		$(".modalz").hide();
	}
})



//End of document ready function
});

