function theBeatlesPlay(musician, instrument) {
  var beatles = [];
  var play = '';
  for (var i = 0; i <= musician.length - 1; i++) {
    play = musician[i] + ' plays ' + instrument[i];
    beatles.push(play);
  }
  return beatles;
}

    const facts = [
      "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"
    ];
    
function johnLennonFacts(fact){
  var i = 0; 
  var facts = [];
  while (i <= fact.length -1){
    facts.push(fact[i] + '!!!');
    i += 1;
  }
  return facts
}