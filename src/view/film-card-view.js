/* eslint-disable camelcase */
import { createElement } from '../render.js';
import {getRuntime} from '../util.js';
// import {movieModel} from '../presenter/board-presenter.js';

// console.log(movieModel);

const createFilmCard = (movie) => {
  const {film_info,comments} = movie;
  return `<article class="film-card">
 <a class="film-card__link">
   <h3 class="film-card__title">${film_info.title}</h3>
   <p class="film-card__rating">${film_info.total_rating}</p>
   <p class="film-card__info">
     <span class="film-card__year">${new Date(film_info.release.date).getFullYear()}</span>
     <span class="film-card__duration">${getRuntime(film_info.runtime)}</span>
     <span class="film-card__genre">${film_info.genre}</span>
   </p>
   <img src="${film_info.poster}" alt="" class="film-card__poster">
   <p class="film-card__description">${film_info.description}</p>
   <span class="film-card__comments">${comments.length} comments</span>
 </a>
 <div class="film-card__controls">
   <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
   <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
   <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
 </div>
 </article>`;
};
export default class NewFilmCardView {
  constructor(movie) {
    this.movie = movie;
  }

  getTemplate() {
    return createFilmCard(this.movie);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


