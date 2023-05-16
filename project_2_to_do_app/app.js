import {Task} from './task.js'
import { comparePriority } from './consts.js';
import { checkDate } from './utilities.js';

export let tasks = [];

export const newTask = (title, taskDesc = "", dueDate = "", priorityLevel = "") => {
    Task.prototype = {
        taskDesc:taskDesc,
        dueDate:dueDate,
        priorityLevel:priorityLevel,
    };
    const task = new Task(title)
    tasks.push(task);
}

export const completeTask = (taskIndex) => tasks[taskIndex].isCompleated = true;

export const inCompleteTask = (taskIndex) => tasks[taskIndex].isCompleated = false;

export const deleteTask = (taskIndex, count) => tasks.splice(taskIndex, count);

export const getTasks = (callBack = ()=> true) => tasks.filter(callBack);

export const printTasks = (tasksArray) => {
    tasksArray.forEach(function callback(value,index) {
        console.log(`- Task #${index} ${value.title}, description: ${value.taskDesc}, priority: ${value.priorityLevel}, due date: ${value.dueDate.getFullYear()}-${value.dueDate.getMonth()+1}-${value.dueDate.getDate()}, completed: ${value.isCompleated}`)});
}

export const sortTasks = (callBack = comparePriority) => tasks.sort(callBack);
