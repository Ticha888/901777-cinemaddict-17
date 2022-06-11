import {render} from '../render.js';
import NewFilmCardView from '../view/film-card-view.js';
import MovieModel from '../model/movie-model.js';
import PopupView from '../view/popup-view.js';
import PopupCommentsView from '../view/popup-comments-view.js';
import PopupNewCommentView from '../view/popup-new-comment-view.js';
import ButtonShowMoreView from '../view/btn-show-more-view.js';
import ListEmptyView from '../view/list-empty-view.js'

const MOVIE_COUNT_STEP = 5;

export default class FilmListPresenter {
  #loadMoreButtonComponent = new ButtonShowMoreView();
  #movieModel = new MovieModel();
  #moviesModelWithComments = this.#movieModel.moviesWithComments;
  #renderedMoviesCardCount = MOVIE_COUNT_STEP;

  init = (container) => {
    if (this.#moviesModelWithComments.length === 0){
      render (new ListEmptyView(),container);
    }
    for (let i=0; i<Math.min(this.#moviesModelWithComments.length,MOVIE_COUNT_STEP); i++){
      render (new NewFilmCardView(this.#moviesModelWithComments[i]),container);
      this.#renderPopup(this.#moviesModelWithComments[i],i);
    }
  };

  #renderPopup = (cardFilm,indexCard) => {
    const popupView = new PopupView(cardFilm,cardFilm.comments);
    const filmCardComment = document.querySelectorAll('.film-card__poster');

    filmCardComment[indexCard].addEventListener('click', ()=>{
      render (popupView,document.body);
      this.#getCommentsPopup(cardFilm);
      render (new PopupNewCommentView(),document.querySelector('.film-details__comments-list'));
      document.body.classList.add('hide-overflow');

      const popup = document.querySelector('.film-details');
      const closePopupBtn = popupView.element.querySelector('.film-details__close-btn');

      const getClosePopup = () => {
        closePopupBtn.addEventListener('click',()=>{
          popup.remove();
          document.body.classList.remove('hide-overflow');
          // eslint-disable-next-line no-use-before-define
          document.removeEventListener('keydown',getClosePopupbyEsc);
          closePopupBtn.removeEventListener('click',getClosePopup);
        });
      };
      getClosePopup();

      const getClosePopupbyEsc = () =>{
        document.addEventListener('keydown', (evt)=>{
          evt.preventDefault();
          if (evt.keyCode === 27){
            popup.remove();
            document.body.classList.remove('hide-overflow');
            closePopupBtn.removeEventListener('click',getClosePopup);
            document.body.removeEventListener('keydown',getClosePopupbyEsc);
          }
        });
      };
      getClosePopupbyEsc();
    });
  };

  #getCommentsPopup = (film) =>{
    film.comments.forEach((comment)=>{
      render (new PopupCommentsView(comment),document.querySelector('.film-details__comments-list'));
    });
  };

  get loadMoreMovieButton() {
    const filmList = document.querySelector('.films-list');
    if (this.#moviesModelWithComments.length > MOVIE_COUNT_STEP){
      render (this.#loadMoreButtonComponent, filmList);
      this.#loadMoreButtonComponent.element.addEventListener('click', this.#handleLoadMoreButtomComponent);
    }
  }

  #handleLoadMoreButtomComponent = (evt) => {
    evt.preventDefault();
    // this.#moviesModelWithComments.slice(this.#renderedMoviesCardCount, MOVIE_COUNT_STEP + this.#renderedMoviesCardCount).forEach((movie)=>{render (new NewFilmCardView(movie),document.querySelector('.films-list__container'));console.log(movie)});
    const newMovies = this.#moviesModelWithComments.slice(this.#renderedMoviesCardCount, MOVIE_COUNT_STEP + this.#renderedMoviesCardCount);
    newMovies.forEach((movie,i)=>{render (new NewFilmCardView(movie),document.querySelector('.films-list__container')); this.#renderPopup(movie,(i+this.#renderedMoviesCardCount));});
    this.#renderedMoviesCardCount += MOVIE_COUNT_STEP;
    if (this.#renderedMoviesCardCount >= this.#moviesModelWithComments.length){
      this.#loadMoreButtonComponent.element.remove();
      this.#loadMoreButtonComponent.removeElement();
    }
  };
}
