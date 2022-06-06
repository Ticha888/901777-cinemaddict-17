import {render} from '../render.js';
import NewFilmCardView from '../view/film-card-view.js';
import MovieModel from '../model/movie-model.js';
import PopupView from '../view/popup-view.js';
import PopupCommentsView from '../view/popup-comments-view.js';
import PopupNewCommentView from '../view/popup-new-comment-view.js';
export default class FilmListPresenter {
  #movieModel = new MovieModel();
  #moviesModelWithComments = this.#movieModel.moviesWithComments;
  init = (container) => {
    for (let i=0; i<this.#moviesModelWithComments.length; i++){
      render (new NewFilmCardView(this.#moviesModelWithComments[i]),container);
      this.#renderPopup(this.#moviesModelWithComments[i],i);
    }
  };

  #renderPopup = (cardFilm,indexCard) => {
    const popupView = new PopupView(cardFilm,cardFilm.comments);
    const filmCardComment = document.querySelectorAll('.film-card__comments');

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
}

