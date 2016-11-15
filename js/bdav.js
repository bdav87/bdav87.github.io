//General JS
function paperClip() {
	$(".well p").text("Developer Skill Assessment");
	$(".skillArea").toggle(500);
}

function note() {
	$(".well p").text("Music to my ears!");
	$("#musicArea").toggle(500);
}

function leaf() {
	$(".well p").text("Plant a tree");
}

function gear() {
	$(".well p").text("Gear");
}

function bell() {
	$(".well p").text("Ding Dong!");
}

function heart() {
	$(".well p").text("I heart you");
}

$(function(){
$('[data-toggle="tooltip"]').tooltip({animation:true});	
})
