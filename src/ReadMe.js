/*
Todo App Documentation
======================

Project Overview:
================
This project is a simple Todo application built using React.js. It allows users to add, edit, delete,
 and filter their tasks based on completion status. The project consists of three main components: App,
  Todo, and TodoList, each serving a specific purpose in managing and displaying the user's todos.

Components:
==========

App:
===
The main component responsible for rendering the entire application.
Manages the state of todos, a new todo being added, and the filter status.
Provides functionality to add, delete, and update todos.
Utilizes the TodoList component to display the list of todos.

Todo:
====
Represents an individual todo item.
Displays todo information such as name, description, and status.
Allows users to edit the todo details, change the status, save edits, or cancel edits.
Contains buttons for editing, deleting, and changing the status of the todo.

TodoList:
========
Responsible for rendering the list of todos.
Receives the list of todos as a prop and maps through them, rendering individual Todo components.
Passes down functions to handle todo deletion, updating, and status changes to the Todo components.

Styling:
=======
The styling is implemented using CSS modules for each component (App.css, Todo.css, and TodoList.css).
The layout is clean and user-friendly, providing a visually appealing interface for managing todos.

Usage:
=====

Adding a Todo:
=============
Enter the name and description in the input fields in the form section.
Click the "Add Todo" button to add the new todo to the list.

Filtering Todos:
===============
Use the dropdown menu in the filter section to filter todos based on completion status (All, Completed, or Not Completed).

Editing a Todo:
==============
Click the "Edit" button on a todo to enter edit mode.
Update the name and description as needed.
Click "Save" to save the changes or "Cancel" to discard them.

Deleting a Todo:
===============
Click the "Delete" button on a todo to remove it from the list.

Changing Todo Status:
====================
Use the dropdown menu in the todo details to change the completion status.

Running the Application:
=======================
Ensure that Node.js and npm are installed on your system.
Navigate to the project directory in the terminal.
Run npm install to install the project dependencies.
Run npm start to start the development server.
Open the application in your browser at http://localhost:3000.

Conclusion:
===========
This Todo application provides a straightforward and functional interface for managing tasks. Users can easily add, edit, 
delete, and filter todos to stay organized. The codebase follows best practices in React development, and the styling enhances
the overall user experience.


*/