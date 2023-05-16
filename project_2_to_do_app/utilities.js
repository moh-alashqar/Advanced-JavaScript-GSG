import * as Consts from './consts.js'
import promptSync from 'prompt-sync';

export const printMenu = () => {
    console.log(Consts.MENU_MESSAGE);
}

export const getUserInput = (message) => {
    const prompt = promptSync({sigint:true})
    return prompt(message);
}

export const checkDate = (dateParam) => {
    if(dateParam != ""){
        var regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
        return regex.test(dateParam);
    }
    return true;
}