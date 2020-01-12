//task-02

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

'use strict';

let calculateEngravingPrice = function(message, pricePerWord) {
    let arrMessage = message.split(" ");
    return arrMessage.length * pricePerWord;
  };
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      10
    )
  ); // 80
  
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      20
    )
  ); // 160
  
  console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40)); // 200
  console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); // 100