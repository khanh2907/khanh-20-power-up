/* global TrelloPowerUp */

var DANCING_KAOMOJI = [
  "＼(^▽^＠)ノ",
  "ヽ(*ﾟｰﾟ*)ﾉ",
  "ヽ( °◇°)ノ",
  "ヾ(･ω･*)ﾉ",
  "ヾ(＠^∇^＠)ノ",
  "ヾ(*´∇`)ﾉ",
  "ヽ(*´Д｀*)ﾉ",
  "ヾ（*⌒ヮ⌒*）ゞ",
  "ヾ(*д*)ﾉ",
  "ヽ(´ー`)ﾉ",
  "ヽ(°◇° )ノ",
  "ƪ(˘⌣˘)ʃ",
  "╰(°ㅂ°)╯",
  "₍₍⁽⁽(ી(^‿ゝ^)ʃ)₎₎⁾⁾",
  "₍₍⁽⁽(ી(´;ω;` )ʃ)₎₎⁾⁾",
  "ヾ｜￣ー￣｜ﾉ",
  "ヘ| ´ω｀ |ﾉ",
  "└( ＾ω＾ )」",
  "┗(｀O´)┛",
  "└| ∵ |┘",
  "♪└|∵|┘♪",
  "└(･･ ･･･)」",
  "(/・・)ノ",
  "(ﾉ･ｪ･)ﾉ",
  "(ﾉ*ﾟｰﾟ)ﾉ",
  "(ノ￣ー￣)ノ",
  "( ﾉ^ω^)ﾉﾟ",
  "(*ﾉ´□`)ﾉ",
  "(ﾉ･o･)ﾉ",
  "(ノ‥)ノ",
  "(ノ´＿ゝ｀）ノ",
  "(ノ^_^)ノ",
  "(ノ^o^)ノ",
  "(ノ￣ω￣)ノ",
  "(ノ°ο°)ノ",
  "(ﾉ≧∀≦)ﾉ",
  "(ﾉﾟ▽ﾟ)ﾉ",
  "〈( ^.^)ノ",
  "ヾ(⌐■_■)ノ♪",
  "ヽ(⌐■_■)ノ♪♬",
  "(｢･ω･)｢",
  "(┌ﾟдﾟ)┌",
  "♪(┌・。・)┌",
  "(｢`･ω･)｢",
  "ヾ( ͝° ͜ʖ͡°)ノ♪",
  "(ﾉ´∀｀)ﾉ",
  "(ノ〝∩｡∩)ﾉ",
  "┛´Д｀┃┛))",
  "(ノ´m｀)ノ",
  "(Г・ω・)г",
  "(´「^o^)「",
  "(ﾉﾟ⊿ﾟ)ﾉ",
  "＼(ﾟｰﾟ＼)",
  "ヽ(･ω･ゞ)",
  "ヽ(^‥^=ゞ)",
  "＼(^ω^＼)",
  "ヾ(-_- )ゞ",
  "ヽ(;^o^ヽ)",
  "ヾ(´▽｀;)ゝ",
  "ヾ(^ ^ゞ",
  "ヾ(^^ゞ)",
  "ヾ(ﾟ∀ﾟゞ)",
  "ヽ(ﾟｰﾟ*ヽ)",
  "ヘ(^_^ヘ)",
  "ヘ(^o^ヘ)",
  "乁( ˙ ω˙乁)",
  "˺⁽ˆ⁰ˆ˺ ⁾˺",
  "ﾍ(´∀｀ﾍ)",
  "ヽ(∩。∩゛ヽ)",
  "ゝ(▽｀*ゝ)",
  "ヾ(´▽｀*;)ゝ”",
  "へ(ﾟ◇ﾟへ)",
  "♪L(´▽｀L )♪",
  "ヾ(￣ー￣ヾ)",
  "ヘ(´m｀ヘ)",
  "ヘ(^0^)ヘ"
]

var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';
var YO_DAWG_IMG = './images/yodawg.png';
var TACO_IMG = './images/taco.png';

var parkMap = {
  acad: 'Acadia National Park',
  arch: 'Arches National Park',
  badl: 'Badlands National Park',
  brca: 'Bryce Canyon National Park',
  crla: 'Crater Lake National Park',
  dena: 'Denali National Park',
  glac: 'Glacier National Park',
  grca: 'Grand Canyon National Park',
  grte: 'Grand Teton National Park',
  olym: 'Olympic National Park',
  yell: 'Yellowstone National Park',
  yose: 'Yosemite National Park',
  zion: 'Zion National Park'
};

var randomFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
}

var randomKaomoji = function () {
  return randomFromArray(DANCING_KAOMOJI);
}

var winningFaces = ['🙂', '😊', '😁', '😎', '😋'];
var losingFaces = ['😭', '😒', '😩', '😢', '😡'];
var tieFaces = ['😑', '😐']

var ROCK = '👊',
  PAPER = '✋',
  SCISSORS = '✌️';

var RPS_MOVES = [ROCK, PAPER, SCISSORS];

var randomRpsGame = function () {

  var move1 = randomFromArray(RPS_MOVES);
  var move2 = randomFromArray(RPS_MOVES);

  var isTie, p1Wins;

  switch (move1) {
    case ROCK:
      if (move2 === PAPER) p1Wins = false;
      else if (move2 === SCISSORS) p1Wins = true;
      else isTie = true;
      break;
    case PAPER:
      if (move2 === SCISSORS) p1Wins = false;
      else if (move2 === ROCK) p1Wins = true;
      else isTie = true;
      break;
    case SCISSORS:
      if (move2 === ROCK) p1Wins = false;
      else if (move2 === PAPER) p1Wins = true;
      else isTie = true;
      break;
  }

  var p1, p2;

  if (isTie) {
    p1 = randomFromArray(tieFaces);
    p2 = randomFromArray(tieFaces);
  } else {
    p1 = p1Wins ? randomFromArray(winningFaces) : randomFromArray(losingFaces);
    p2 = p1Wins ? randomFromArray(losingFaces) : randomFromArray(winningFaces);
  }

  return `${p1} ${move1}  vs  ${move2} ${p2}`;
}

var getBadges = function (t) {
  return t.list('name')
    .get('name')
    .then(function (listName) {
      switch (listName) {
        case 'KAOMOJI':
          return [
            {
              dynamic: function () {
                return {
                  title: randomKaomoji(),
                  text: randomKaomoji(),
                  refresh: 10
                }
              }
            }
          ]
        case 'Roshambo':
          return [
            {
              dynamic: function () {
                return {
                  title: randomRpsGame(),
                  text: randomRpsGame(),
                  refresh: 10
                }
              }
            }
          ]
        case 'Botler':
          return t.card('name').get('name').then((cardName) => {
            if (cardName.toLowerCase().indexOf('xzibit') > -1) {
              return [
                {
                  title: 'Yo dawg, I heard you liked...',
                  text: 'Yo dawg, I heard you liked...',
                  icon: YO_DAWG_IMG
                }
              ]
            }

            return [];
          })
        default:
          break;
      }

      return [];
    })
};

var formatNPSUrl = function (t, url) {
  if (!/^https?:\/\/www\.nps\.gov\/[a-z]{4}\//.test(url)) {
    return null;
  }
  var parkShort = /^https?:\/\/www\.nps\.gov\/([a-z]{4})\//.exec(url)[1];
  if (parkShort && parkMap[parkShort]) {
    return parkMap[parkShort];
  } else {
    return null;
  }
};

var cardButtonCallback = function (t) {
  return t.overlay({
    url: './overlay.html',
    args: { rand: (Math.random() * 100).toFixed(0) }
  });
};

var boardButtonCallback = function (t) {
  return t.boardBar({
    url: './flappy.html',
    height: 350
  })
};


TrelloPowerUp.initialize({
  'card-badges': function (t, options) {
    return getBadges(t);
  },
  'board-buttons': function (t, options) {
    return [
      {
        icon: TACO_IMG,
        text: 'Play Flappy Taco',
        callback: boardButtonCallback
      },
      {
        icon: './images/linkedin.png',
        text: 'LinkedIn Profile',
        url: 'https://www.linkedin.com/in/khanh2907/'
      },
      {
        icon: './images/bitbucket.png',
        text: 'Bitbucket Profile',
        url: 'https://bitbucket.org/khanhfucius/'
      },
      {
        icon: './images/confluence.ico',
        text: 'Blog (Internal)',
        url: 'https://extranet.atlassian.com/spaces/viewspace.action?key=~khanguyen'
      },
      {
        icon: './images/medium.png',
        text: 'Blog (Public)',
        url: 'https://medium.com/@khanhfucius'
      },
    ];
  }
});
