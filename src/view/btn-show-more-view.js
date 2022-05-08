import { createElement } from '../render.js';

const createBtnShowMore = () => '<button class="films-list__show-more">Show more</button>';

export default class NewBtnShowMoreView {
  getTemplate() {
    return createBtnShowMore();
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


