function theBeatlesPlay(musician, instr) {
  var beatles = [];
  var play = '';
  for (var i = 0; i <= musician.length - 1; i++) {
    play = musician[i] + ' plays ' + instr[i];
    beatles.push(play);
  }
  return beatles;
}