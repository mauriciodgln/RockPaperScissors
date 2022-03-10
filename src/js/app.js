document.addEventListener('DOMContentLoaded', function(){
  game();
  switchLight();
  changeHands();
  arrow();
});

const userChoices = document.querySelectorAll('button');

function game() {

  const userChoiceDisplay = document.querySelector('#userChoice');
  const computerChoiceDisplay = document.querySelector('#computerChoice');
  const resultDisplay = document.querySelector('#resultGame');
  let userChoice;
  let computerChoice;
  let result;
  const choices = [];
  
  
  // userChoice
  
  userChoices.forEach((choice) => {
    
    choices.push(choice.attributes.id.value);
  
    choice.addEventListener('click', () => {
  
      userChoice = choice.attributes.id.value;
      userChoiceDisplay.innerHTML = userChoice;
      userChoiceDisplay.classList.add('choiceDisplay');
      
      // computerChoice
  
      computer();
  
      // result
  
      getResult();
  
      // notChosen
  
      notChosen();
      
    });
  
  });
  
  
  // computerChoice
  
  const computer = () => {
    
    const randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
    computerChoiceDisplay.classList.add('choiceDisplay');

  }
  
  
  // result
  
  const getResult = () => {

    switch(userChoice + ' ' + computerChoice) {
      case 'rock scissors':
      case 'paper rock':
      case 'scissors paper':
        result = 'You win!'
        break;
      case 'scissors rock':
      case 'rock paper':
      case 'paper scissors':
        result = 'You lose'
        break;
      case 'rock rock':
      case 'paper paper':
      case 'scissors scissors':
        result = 'It\'s a draw'
        break;
    }
  
    resultDisplay.innerHTML = result;
    resultDisplay.classList.add('choiceDisplay');

  }
  
  
  // notChosen

  const notChosen = () => {

    for(let i = 0; i < choices.length; i++) {
      if(userChoice != choices[i]){
        userChoices[i].classList.add('notChosen');
      } else {
        userChoices[i].classList.remove('notChosen');
      }
    }
  }
}


// Switch

function switchLight() {

  const containerSwitch = document.querySelector('#container-switch');
  const switchLight = document.querySelector('#switch-light');
  const body = document.querySelector('body');

  containerSwitch.addEventListener('click', () => {
    switchLight.classList.toggle('switch-active');
    
    let bodyLight = body.attributes.class.value;

    if(bodyLight == 'light') {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
  });

}


// Hands

function changeHands () {
  const handOptions = document.querySelector('#hands-options');
  const handOptionsChoice = document.querySelectorAll('.hand-option', '.container-hands');
  let userChoiceHands;

  handOptions.addEventListener('click', () => {
    handOptions.classList.toggle('active');
  });

  handOptionsChoice.forEach((option) => {

    option.addEventListener('click', () => {

      userChoiceHands = option.innerText;
      userChoiceHands = userChoiceHands.split('\n');
      console.log(userChoiceHands);

      for( let i = 0; i < userChoices.length; i++ ) {
        userChoices[i].innerText = userChoiceHands[i];
      }
    })
  });
}


// History

function arrow () {
  const arrow = document.querySelector('.arrow');

  arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
  });

}
