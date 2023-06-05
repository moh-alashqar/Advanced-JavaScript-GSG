export const MENU_MESSAGE = `
***************************
Welcome to JS Movie Catalog
***************************
Select an action:
1) Add a new movie
2) List all movies
3) Update a movie
4) Update a movie online (OMDB)
5) Delete a movie
6) Search
7) Clear all movies
8) Exit
***************************
Press ctrl+c to exit at any time
Press 'M' to print this menu again
`.replaceAll("        ", "");

export const TITLE_MESSAGE = "Movie title? ";
export const CHOICE_MESSAGE = "What's your choice? ";
export const ERROR_INPUT = "Ops! invalid input, please try again? ";
export const DIR_MESSAGE = "Movie director? ";
export const DATE_MESSAGE = "Release year? ";
export const GENRE_MESSAGE = "Genre? ";
export const INDEX_MESSAGE = "Task number? ";
export const ERROR_DATE = "Ops! invalid year format, please try again in (yyyy) format? ";

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

