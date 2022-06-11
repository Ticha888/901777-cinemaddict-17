import {getMovieData} from '../mock/movie-mock.js';
import {movieComments} from '../mock/movie-mock.js';

export default class MovieModel {
  movies = Array.from({length: 13}, getMovieData); //здесь указываем количество карточек фильмов и попапов.

  moviesComments = movieComments;

  #getCommentsbyId = (id) => this.moviesComments.find((comment) => comment.id === id);

  get moviesWithComments() {
    this.movies.forEach((movie)=>{
      const commentsDetail = movie.comments.map((id)=>this.#getCommentsbyId(id));
      movie.comments = commentsDetail;
    });
    return this.movies;
  }
}

