# React To-Do Application

## Overview

This project is a basic To-Do application built with ReactJS. It allows users to add, view, edit, complete, and delete tasks. The application demonstrates an understanding of HTML, CSS, JavaScript, React components, hooks, and state management using Redux.

## Features

- **Add Task**: Users can input a task and add it to the list.
- **View Tasks**: Display all added tasks in a list format.
- **Edit Task**: Users can edit an existing task.
- **Complete Task**: Users can mark a task as completed without deleting it.
- **Delete Task**: Users can delete a task from the list.
- **Persistent Storage**: Tasks are saved in local storage, so they are not lost on page reload.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Redux**: For state management.
- **HTML**: For structuring the application layout.
- **CSS**: For styling the application.
- **JavaScript (ES6)**: For implementing application logic.
- **Bootstrap**: For design components.
- **Framer Motion**: For animations.

## Project Structure

```
src/
│
├── components/
│   ├── Todos.jsx
│   ├── DisplayTodos.jsx
│   ├── TodoItem.jsx
│
├── redux/
│   ├── reducer.jsx
│   ├── store.jsx
│
├── App.js
├── App.css
├── index.js
```

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Bhanukaushik/TodoApp.git
```

2. **Navigate to the project directory:**

```bash
cd react-todo-app
```

3. **Install dependencies:**

```bash
npm install
```

4. **Start the development server:**

```bash
npm start
```

The application will be available at `https://bhanukaushik.github.io/TodoApp/`.

## Usage

1. **Add a Task:**

   - Enter a task in the input field.
   - Press the "Add" button or hit Enter to add the task to the list.

2. **View Tasks:**

   - All tasks are displayed in a list.
   - Use the filter buttons to view active, completed, or all tasks.

3. **Edit a Task:**

   - Click the "Edit" button next to a task.
   - Modify the task in the input field and click "Save" to update the task.

4. **Complete a Task:**

   - Click the "Complete" button next to a task to mark it as completed.

5. **Delete a Task:**

   - Click the "Delete" button next to a task to remove it from the list.

## State Management

The application uses Redux for state management. The state includes the list of tasks and actions to add, remove, update, and complete tasks. The state is persisted in local storage to retain tasks across page reloads.

### Redux Actions and Reducers

- **addTodos**: Adds a new task to the list.
- **removeTodos**: Removes a task from the list.
- **updateTodos**: Updates an existing task.
- **completeTodos**: Marks a task as completed.
- **editTodos**: Sets a task as being edited.

## Local Storage

Tasks are stored in local storage to ensure they persist across page reloads. This is handled in the `store.jsx` file by loading the initial state from local storage and saving the state to local storage whenever it changes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
