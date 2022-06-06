import { getRandomNumber } from '../util.js';

const filmTitles = ['Green elephant', 'The Elden Rings', 'Adventure Time', 'South Park', 'Simpsons'];
const filmPosters = ['made-for-each-other.png', 'popeye-meets-sinbad.png','sagebrush-trail.jpg', 'santa-claus-conquers-the-martians.jpg', 'the-dance-of-life.jpg', 'the-great-flamarion.jpg', 'the-man-with-the-golden-arm.jpg'];
const filmDescription = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'];

export const getMovieData = () =>  ({
  'id': '0',
  'comments': ['40','41','42'],
  'filmInfo': {
    'title': filmTitles[getRandomNumber(0,4)],
    'alternativeTitle': 'Laziness Who Sold Themselves',
    'totalRating': 5.3,
    'poster': `images/posters/${filmPosters[getRandomNumber(0,4)]}`,
    'ageRating': 0,
    'director': 'Tom Ford',
    'writers': [
      'Takeshi Kitano',
    ],
    'actors': [
      'Morgan Freeman'
    ],
    'release': {
      'date': '2019-05-11T00:00:00.000Z',
      'releaseCountry': 'Finland'
    },
    'runtime': 77,
    'genre': [
      'Comedy'
    ],
    'description': filmDescription[getRandomNumber(0,filmDescription.length-1)]
  },
  'userDetails': {
    'watchlist': false,
    'alreadyWatched': true,
    'watchingDate': '2019-04-12T16:12:32.554Z',
    'favorite': false
  }
});

export const movieComments = [{
  'id': '42',
  'author': 'Ilya O\'Reilly',
  'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  'date': '2019-05-11T16:12:32.554Z',
  'emotion': 'smile'
},
{
  'id': '43',
  'author': 'Hanz Himmer',
  'comment': 'The best film!!',
  'date': '2019-05-11T16:12:32.554Z',
  'emotion': 'smile'
},
{
  'id': '40',
  'author': 'Zecar',
  'comment': 'Coool film',
  'date': '2019-05-11T16:12:32.554Z',
  'emotion': 'smile'
},
{
  'id': '41',
  'author': 'Apollo Brown',
  'comment': 'This film im seee',
  'date': '2019-05-11T16:12:32.554Z',
  'emotion': 'smile'
}];


