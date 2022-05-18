import {getmovieData} from '../mock/movie-mock.js';
import {movieComments} from '../mock/movie-mock.js';


export default class MovieModel {
  movies = Array.from({length: 1}, getmovieData); //здесь указываем количество карточек фильмов и попапов.
  getCommentsMovie = () => {
    const activeComments = [];
    this.movies.forEach((element)=>{
      element.comments.forEach((elem,index)=>{
        if (elem === movieComments[index].id){
          activeComments.push(movieComments[index]);
        }
      });
    });
    return activeComments;
  };

  getMovies = () => this.movies;
}
