'use strict';

var cardsArray = [{
  'name': 'h01',
  'img': 'img/trump/png/h01.png'
}, {
  'name': 'h02',
  'img': 'img/trump/png/h02.png'
}, {
  'name': 'h03',
  'img': 'img/trump/png/h03.png'
}, {
  'name': 'h04',
  'img': 'img/trump/png/h04.png'
}, {
  'name': 'h05',
  'img': 'img/trump/png/h05.png'
}, {
  'name': 'h06',
  'img': 'img/trump/png/h06.png'
}, {
  'name': 'h07',
  'img': 'img/trump/png/h07.png'
}, {
  'name': 'h08',
  'img': 'img/trump/png/h08.png'
}, {
  'name': 'h09',
  'img': 'img/trump/png/h09.png'
}, {
  'name': 'h10',
  'img': 'img/trump/png/h10.png'
}, {
  'name': 'h11',
  'img': 'img/trump/png/h11.png'
}, {
  'name': 'h12',
  'img': 'img/trump/png/h12.png'
}, {
  'name': 'h13',
  'img': 'img/trump/png/h13.png'
}];

var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
