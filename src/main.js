import NewFilterView from './view/filter-view.js';
import NewFilmsContainerView from './view/films-container-view.js';
import NewSortCardFilmView from './view/sort-view.js';
import NewProfileView from './view/profile-view.js';
import ButtonShowMoreView from './view/btn-show-more-view.js';
import {render} from './render.js';
import FilmListPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.main');
const headerElement = document.querySelector('header');
const filmListPresenter = new FilmListPresenter();


render(new NewProfileView(),headerElement);
render(new NewFilterView(), siteMainElement);
render(new NewSortCardFilmView(), siteMainElement);
render(new NewFilmsContainerView(),siteMainElement);

const filmsContainer = document.querySelector('.films-list__container');

filmListPresenter.init(filmsContainer);

filmListPresenter.loadMoreMovieButton

