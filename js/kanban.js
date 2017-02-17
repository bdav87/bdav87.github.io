//Document ready
$(function(){

//Enable Close Option on notes and columns
function enableClose(){
$(".close").on("click", function(){
$(this).parent().parent().fadeOut(250, function(){
	$(this).remove();
});

});

}

//Note prototype
var Note = function(content, name){
	this.content = content || 'Empty Note',
	this.name = name || 'New Note',
	this.display = function(){
		this.body = "<div class='note'><div class='menuSeparator'><button class='close'><i class='material-icons'>close</i></button></div><p>" +
		this.content +
		"</p></div>"
	}
};

//Column prototype
var Column = function(name){
	this.name = name || 'New Column',
	this.body = "<div class='kanbanCol'><div class='menuSeparator'><button class='close'><i class='material-icons'>close</i></button></div><h3>" +
		this.name +
		"</h3><div class='kanbanInnerCol'></div></div>"
};

/*
Create a column section
All the column things go here
*/

function createNewColumn(){
	var newColumn = new Column($("#colInput").val());
	$(".innerContainer").append(newColumn.body);

	//Reset user input field
	$("#colInput").val('');

	//console.log(columnStuff);
	$(".kanbanInnerCol").sortable({
		placeholder: "notePlaceholder",
		connectWith: ".kanbanInnerCol"
	});
	//$(".kanbanCol").append(note);
		//$(".kanbanCol").sortable("refresh");

		//enables close on the new column
		enableClose();
}


/*
Create a note section
All the note things go here
*/

//Check for existing columns.
function checkColumns(){
var columnCount = document.getElementsByClassName('kanbanCol');
	if (columnCount.length < 1) {
		createNewColumn();
	}

}


//Creates a new note object
function createNewNote(){
	//Checks if there are columns. If no column exists, one is created
	checkColumns();

	//New note gets content from the user input field
	//The jQuery object is passed as a parameter
	var newNote = new Note($("#noteInput").val());

	//The input field is cleared
	$('#noteInput').val('');

	//The variable points to the first column
	var firstColumn = document.getElementsByClassName("kanbanInnerCol")[0];

	//This activates the function which adds the user content to the body value of the note
	newNote.display();

	//This appends the note to the first column
	$(firstColumn).append(newNote.body);
	//enables the close button on the new note
	enableClose();

}

//Event handlers to pull user input for new columns and notes
$("#noteInputForm").on("submit", function(e){
	e.preventDefault();
	createNewNote();
})

$("#colInputForm").on("submit", function(e){
	e.preventDefault();
	createNewColumn();
})

//Experimental global switch
var globalSwitch = false;

//Using the switch to swap backgrounds
$('header h1').on("click", function(){
	if (globalSwitch) {
		$('body').css({"background": "#eaf9ff"});
		globalSwitch = false;
	}
	else {
		$('body').css({"background": "#329bc5"});
		globalSwitch = true;
	}

})


//Ready function closing brace
})
