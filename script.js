'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


function main() {
  let number = Math.ceil(Math.random() * 100);
  console.log('number: ', number);
  
  function tryEnter() {
    let userNumber = prompt('Угадай число от 1 до 100', 20);
    
    let message;
    
    let ask = false;
    
    if (userNumber === null) {
      alert('Игра закончена');
      
      return false;
    }
    
    if (userNumber > number) {
      ask = true;
      message = 'Загаданное число меньше';
    }
    
    if (userNumber < number) {
      ask = true;
      message = 'Загаданное число больше';
    }
    
    if (+userNumber === number) {
      message = 'Вы угадали!';
    }
    
    if (!isNumber(userNumber)) {
      ask = true;
      message = 'Введи число!';
    }
    
    alert(message);
    
    if (ask === true) {
      tryEnter();
    }
  }
  
  tryEnter();
}

main();