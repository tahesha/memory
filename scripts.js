// Helper functions
function shuffle(array) {
    let currentIndex = array.length; randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


//Our code starts here
// Makes an array of card objects; we did a string instead of a number for the value because in a deck of cards we may have a King, Queen, etc...not just numbers.
var cards = [
    {value: '2', image: './images/2.svg'},
    {value: '3', image: './images/3.svg'},
    {value: '2', image: './images/2.svg'},
    {value: '3', image: './images/3.svg'},
]

var cardEls = document.querySelectorAll('.card')

shuffle(cards)