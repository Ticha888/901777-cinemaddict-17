import {render} from '../render.js';
import NewFilmCardView from '../view/film-card-view.js';
import MovieModel from '../model/movie-model.js';
// import NewPopupView from '../view/popup-view.js';
// import NewPopupCommentsView from '../view/popup-comments-view.js';
// import PopupNewCommentView from '../view/popup-new-comment-view.js';

export default class FilmListPresenter {
  movieModel = new MovieModel();
  init = (container) => {
    for (let i=0; i<this.movieModel.getMovies().length; i++){
      render (new NewFilmCardView(this.movieModel.getMovies()[i]),container);
      // console.log(this.movieModel.getMovies()[i])
      // render (new NewPopupView(this.movieModel.getMovies()[i],this.movieModel.getCommentsMovie()),document.body); //добвляем попап в рендер
    }
    // for (let i=0; i<this.movieModel.getCommentsMovie().length; i++){
    //   render (new NewPopupCommentsView(this.movieModel.getCommentsMovie()[i]),document.querySelector('.film-details__comments-list'));
    // }
    // render (new PopupNewCommentView(),document.querySelector('.film-details__comments-list'));
  };
}
