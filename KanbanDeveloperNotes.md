# Kanban development documentation

## Summary
This document lays out the plan for the development of a kanban board web application. It includes the user stories and intended functionality of different components. The intent of this document is to create a plan before writing code. The objective is building a guide to facilitate development and avoid stumbling blocks.

## User stories
* Create a new note or task by clicking a button on a kanban column
* Notes can be moved between columns and will snap into place in an organized manner
* Notes can be edited and deleted
* Creation and modification of notes can be cancelled

## Development

#### Retro

##### Lessons learned from my initial attempts

My original plan was to leverage the jQuery UI methods to enable drag and drop functionality for the kanban notes. This may have caused me to oversimplify the creation of notes.

Notes were simply text from user input on an entry field at the top of the page. When created, this text was placed within a DIV using the **.note** CSS class and written into a JS variable. This spawned a note on the To Do column, which resulted in a resizing of the To Do column only with the addition of new notes. By adding the **.draggable()** method to these new notes they could be moved around on the screen, but they did not snap to any column.

There were some difficulties implementing the **.droppable()** method on the columns. This locked the notes in place for some reason.

Ultimately I decided I needed to outline a plan for building out the basic features by defining the goals of the application.

#### The Note Object
Every note should be created based off a prototype which includes a set of properties.

**Brainstormed Properties**
* Name/Title: This is the name of the note. It can be left undefined.
* Body: The content of the note.
* Unique ID: A number that increments with each new note. This provides a quick way to identify a note and make changes to it.
* Column: Identifies what column this note belongs in. I may leverage this modify column height based on the notes attached.
* Created: A timestamp identifying when the note was created.
* Draggable: This is provided by the jQuery UI library, and needs to be applied on each note. I need to ensure that this also allows the note to snap to the column object.
* Sortable: Another method provided by jQuery UI. This should allow a user to arrange the notes within a column.

#### The Column Object
The Kanban board uses 3 columns, To Do, Doing, and Done. However, separating these as 3 unique entities may be creating more work than necessary. Instead, I want to create a column prototype that includes all the necessary behavior.

**Brainstormed Properties**
* Name: Name of the column.
* Notes: An array including the unique ID of all attached notes
* Height: Intelligently adjusts the height of the column based on the number of notes
* Droppable: Notes should snap to the columns. This is a method provided by jQuery UI.

----

### MVP
* User can create notes with unique names and content.
* User can remove notes.
* User can create columns with unique names.
* User can move notes to different columns.
* User can remove columns.

#### Flow

User should see the option to create a new note or column from the menu. If no columns exist, creating a new note creates a column. For the MVP, there are 2 text fields and 2 buttons. The buttons submit the value from their associated text field, either for a new column or a new note.
