# Simple To-Do List

This project is a simple to-do list application built with HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as completed. The tasks are persisted using local storage, so they remain even after the browser is closed.

- ## Live Demo
- [Live Demo link](https://todobyak.ccbp.tech/)

## Features

- **Add Tasks:** Users can add new tasks by typing them into the input field and pressing the "Add" button or the Enter key.
- **Delete Tasks:** Each task has a delete icon that allows users to remove the task from the list.
- **Mark Tasks as Completed:** Users can mark tasks as completed by checking the checkbox next to the task. Completed tasks are visually distinguished.
- **Persistent Storage:** Tasks are stored in the browser's local storage, ensuring they are saved even after the page is refreshed or the browser is closed.
- **Clear All:** The clear button allows you to remove all tasks from the list and clear the local storage.
- **Input Validation:** Prevents adding empty tasks.

## Getting Started

To use this application, simply open the `index.html` file in your web browser.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### Usage

1.  **Add a Task:**
    - Type your task into the input field.
    - Click the "Add" button or press the Enter key.
2.  **Mark a Task as Completed:**
    - Click the checkbox next to the task.
3.  **Delete a Task:**
    - Click the trash can icon next to the task.
4.  **Clear All Tasks:**
    - Click the "Clear" button.

## Project Structure

- `index.html`: The HTML structure of the to-do list application.
- `script.js`: The JavaScript file containing the application logic.
- `style.css`: The CSS file containing the application styling.

## JavaScript Logic

The JavaScript code performs the following actions:

1.  **Initialization:**
    - Retrieves references to the input field, add button, list container, and clear button.
    - Loads the task list from local storage, or initializes an empty list if none exists.
    - Creates list items for each task in the loaded list.
2.  **Adding Tasks:**
    - The `addItem()` function handles adding new tasks.
    - It retrieves the task text from the input field, validates that it is not empty, creates a new task object, adds it to the list, creates a new list item, clears the input field, and saves the updated list to local storage.
3.  **Deleting Tasks:**
    - The `deleteItem()` function handles deleting tasks.
    - It removes the list item from the DOM, removes the task from the list, and updates local storage.
4.  **Marking Tasks as Completed:**
    - Clicking the checkbox toggles the `checked` property of the task object and updates the visual appearance of the task.
    - The updated list is saved to local storage.
5.  **Creating List Items:**
    - The `createItem()` function creates a new list item for a task.
    - It creates the list item, checkbox, task text, and delete icon, and adds them to the DOM.
    - It also attaches event listeners to the checkbox and delete icon.
6.  **Clearing all tasks:**
    - The clear button event listener clears the list container, clears local storage, and clears the input field.

## Dependencies

- [Font Awesome](https://fontawesome.com/) for icons.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
