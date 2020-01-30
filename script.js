'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function tryEnter() {
  let userNumber = prompt('Угадай число от 1 до 100', 20);

  let ask = false;
  let message;
  let number = 30;

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