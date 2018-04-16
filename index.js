function theBeatlesPlay(musician, instrument) {
  var beatles = [];
  var play = '';
  for (var i = 0; i <= musician.length - 1; i++) {
    play = musician[i] + ' plays ' + instrument[i];
    beatles.push(play);
  }
  return beatles;
}