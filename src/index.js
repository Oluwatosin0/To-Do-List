/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
import _ from 'lodash';
import './style.css';

    // Sample array of to-do tasks
    const tasks = [
        { description: "Wash the Dishes", completed: false, index: 1 },
        { description: "Go for Shopping", completed: true, index: 2 },
        { description: "Complete microverse task", completed: false, index: 3 },
    ];

// Function to populate the to-do list
function populateToDoList() {
    const todoListContainer = document.getElementById("todo-list");

    // Sort the tasks by their index values
    tasks.sort((a, b) => a.index - b.index);

    const ul = document.createElement("ul");

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `${task.description} (Completed: ${task.completed})`;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

// Call the function on page load
window.onload = populateToDoList;