import { createElement } from '../render.js';

const createBtnShowMore = () => '<button class="films-list__show-more">Show more</button>';

export default class NewBtnShowMoreView {
  #element = null;

  get template() {
    return createBtnShowMore();
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


