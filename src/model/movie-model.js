import {getMovieData} from '../mock/movie-mock.js';
import {movieComments} from '../mock/movie-mock.js';

export default class MovieModel {
  movies = Array.from({length: 2}, getMovieData); //здесь указываем количество карточек фильмов и попапов.

  moviesComments = movieComments;

  getCommentsbyId = (id) => this.moviesComments.filter((comment) => comment.id === id);

  commentsDetails = this.movies.forEach((movie)=>{
    movie.comments.map((id)=>this.getCommentsbyId(id));
  });


  getMovies = () => this.movies;
}
