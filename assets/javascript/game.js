window.onload = function () {

  var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  
  var words = ["Harry Potter", "Hedwig", "Hagrid", "Hermione", "Dumbledore", "Voldemort", "Weasley", "Hogwarts"];           // Selected words
  var word;
  var guess;             
  var guesses = [ ];      
  var lives = 10;     
  var counter = 0;          
  var space = 0;        

 
  var showLives = document.getElementById("mylives");

  
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('div');

    for (var i = 0; i < letterChoices.length; i++) {
      letters.id = 'letterChoices';
      list = document.createElement('button');
      list.id = 'letter';
      list.innerHTML = letterChoices[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  

  
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "   ";
        space = 1;
      } else {
        guess.innerHTML = "___";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  
   check = function () {
    list.onclick = function () {
      var guess = this.innerHTML;
      
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === guess.toUpperCase()) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = (word.toUpperCase().indexOf(guess.toUpperCase()));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
    
  
  play = function () {

    chosenWord = words[Math.floor(Math.random() * words.length)];
    word = chosenWord.replace(/\s/g, "-");
    console.log(word);
    buttons();
    result();
    comments();
  }

  play();
}


