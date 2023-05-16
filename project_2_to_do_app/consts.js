export const MENU_MESSAGE = `
***********************
Welcome to JS TODO-APP
***********************
Select an action:
1) Add a new task
2) List all tasks
3) List completed tasks
4) Mark the task as done
5) Delete a task
6) Sort tasks by the due date
7) Sort tasks by priority
8) Clear all tasks
9) Exit
***********************
Press ctrl+c to exit at any time
Press 'M' to print this menu again
`.replaceAll("        ", "");

export const TITLE_MESSAGE = "Task title? ";
export const CHOICE_MESSAGE = "What's your choice? ";
export const ERROR_INPUT = "Ops! invalid input, please try again? ";
export const DESC_MESSAGE = "Task description? ";
export const DATE_MESSAGE = "Task deadline? In (yyyy-mm-dd) format! ";
export const PRIORIT_MESSAGE = "Ptiority level (out of 10)? ";
export const INDEX_MESSAGE = "Task number? ";
export const ERROR_DATE = "Ops! invalid date format, please try again in (yyyy-mm-dd) format? ";

export const comparePriority = (param1, param2) => {
    if (param1.priorityLevel < param2.priorityLevel) return -1;
    if (param1.priorityLevel > param2.priorityLevel) return 1;
    return 0;
}

export const compareDate = (param1, param2) => {
    if (param1.dueDate < param2.dueDate) return -1;
    if (param1.dueDate > param2.dueDate) return 1;
    return 0;
}

export const compleatedFilter = (param) => param.isCompleated;

export const inCompleatedFilter = (param) => !param.isCompleated;

