# To-Do List

A simple, dark-themed to-do list app built with vanilla JavaScript. Tasks persist across browser sessions using LocalStorage — no backend required.

## Live Demo
[To-Do List](https://samvesh-cs.github.io/todo-list/)

## Features
- Add tasks by typing and pressing Enter
- Mark tasks as complete/incomplete (toggle)
- Delete individual tasks
- Clear all tasks at once
- Data persists on page refresh via LocalStorage

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)

## How It Works
- Tasks are stored as objects (`{ id, description, done }`) in an array, saved to `localStorage` as JSON.
- The UI re-renders from this array every time a task is added, toggled, or deleted, keeping the DOM and stored data in sync.

## Run Locally
1. Clone the repo:
git clone https://github.com/samvesh-cs/todo-list.git
2. Open `index.html` in your browser — no build step or server required.

## Possible Improvements
- Edit existing tasks
- Persist task order via drag-and-drop
- Add input validation feedback (e.g., shake animation on empty submit)

## Author
Samvesh Patil — [GitHub](https://github.com/samvesh-cs)
