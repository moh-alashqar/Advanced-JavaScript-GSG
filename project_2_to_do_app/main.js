import * as Utilities from './utilities.js'
import * as Consts from './consts.js'
import * as app from './app.js'

Utilities.printMenu();
while(true){
    let userInput = Utilities.getUserInput(Consts.CHOICE_MESSAGE);
    if(userInput == 9){break;} else {processMenu(userInput);} 
}

function processMenu(param){
    switch(param){
        case '1': 
            var title = Utilities.getUserInput(Consts.TITLE_MESSAGE);
            var taskDesc = Utilities.getUserInput(Consts.DESC_MESSAGE);
            var dueDate = Utilities.getUserInput(Consts.DATE_MESSAGE);
            while(!Utilities.checkDate(dueDate)){
                console.log(Consts.ERROR_DATE);
                dueDate = Utilities.getUserInput(Consts.DATE_MESSAGE);
            }
            dueDate = new Date(dueDate);
            var priorityLevel = Utilities.getUserInput(Consts.PRIORIT_MESSAGE);
            app.newTask(title, taskDesc, dueDate, priorityLevel);
        break;
        case '2': 
            app.printTasks(app.getTasks())
        break;
            
        case '3':
            app.printTasks(app.getTasks(Consts.compleatedFilter))
        break;
        case '4':
            var index = Utilities.getUserInput(Consts.INDEX_MESSAGE);
            app.completeTask(index)
        break;
        case '5':
            var index = Utilities.getUserInput(Consts.INDEX_MESSAGE);
            app.deleteTask(index,1);
        break;
        case '6':
            app.printTasks(app.sortTasks(Consts.compareDate));
        break;
        case '7':
            app.printTasks(app.sortTasks(Consts.comparePriority));
        break;
        case '8':
            app.deleteTask(0,app.tasks.length);
        break;
        case 'm':
        case 'M':
            Utilities.printMenu();
        break;
        default: 
        console.log(Consts.ERROR_INPUT)
    }
}
