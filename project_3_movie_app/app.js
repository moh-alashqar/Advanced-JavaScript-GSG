import { Movie } from './movie.js';
import { comparePriority } from './consts.js';
import fs from 'fs';

export const newMovie = (title, director, relYear, genre) => {
    const movie = new Movie(title, director, relYear, genre);
    console.log(movie);
    console.log(JSON.stringify(movie));
    try {
        fs.appendFileSync('movies.json', JSON.stringify(movie)+",\n" , 'utf-8', (e) => {
            if(e){
                throw e;
            } else {
                console.log('Movie has been created!');
            }
        })
    } catch (e) {
        console.error(e);
    }
}

export const deleteMovie = (taskIndex, count) => tasks.splice(taskIndex, count);

export const getMovies = () => fs.readFile('movies.json', 'utf-8', (e, data) => {
    if(e){
        console.log(e);
        return;
    }
    return data;
});

export const printMovies = (moviesArray) => {
    moviesArray.forEach(function callback(value,index) {
        console.log(`- Movie #${index} ${value.title}, director: ${value.director}, release year: ${value.relYear}, genre: ${value.genre}`)});
}