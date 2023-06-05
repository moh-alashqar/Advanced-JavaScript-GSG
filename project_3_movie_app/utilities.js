import * as Consts from './consts.js'
import promptSync from 'prompt-sync';

export const printMenu = () => {
    console.log(Consts.MENU_MESSAGE);
}

export const getUserInput = (message) => {
    const prompt = promptSync({sigint:true})
    return prompt(message);
}