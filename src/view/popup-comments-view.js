import { createElement } from '../render.js';
import {getTimeComment} from '../util.js';

const createFilmComment = (filmComment) => {
  const {author,comment,date,emotion} = filmComment;
  return `<li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">${comment}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${author}</span>
                <span class="film-details__comment-day">${getTimeComment(date)}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>`;
};

export default class PopupCommentsView {
  constructor(comment) {
    this.comment = comment;
  }

  #element = null;

  get template() {
    return createFilmComment(this.comment);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}


