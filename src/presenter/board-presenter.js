import {render} from '../render.js';
import NewFilmCardView from '../view/film-card-view.js';

export default class FilmListPresenter {
  init = (container) => {
    for (let i=0; i<5;i++){
      render (new NewFilmCardView(),container);
    }
  };
}
