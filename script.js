'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


function main() {
  let number = Math.ceil(Math.random() * 100);
  let tries = 10;
  console.log('number: ', number);
  
  function tryEnter() {
    console.log('tries: ', tries);
    
    if (tries === 0) {
      let again = confirm('Попытки закончились, хотите сыграть еще?');

      if (again) {
        main();
      }

      return false;
    }

    let userNumber = prompt('Угадай число от 1 до 100', 20);
    
    let message;
    
    let ask = false;
    

    if (userNumber === null) {
      alert('Игра закончена');
      
      return false;
    }
    
    if (userNumber > number) {
      ask = true;
      tries--;
      message = 'Загаданное число меньше, осталось попыток: ' + tries;
    }
    
    if (userNumber < number) {
      ask = true;
      tries--;
      message = 'Загаданное число больше, осталось попыток: ' + tries;
    }
    
    if (+userNumber === number) {
      let again = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

      if (again) {
        main();
      }

      return false;
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