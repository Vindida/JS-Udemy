"use strict";
// 2) В файле скрипта создать 2 переменные (money и time), 
// которые будут получать данные от пользователя:
let money = prompt('Ваш бюджет на месяц?','');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

// 3) Создать объект appData, который будет содержать такие данные:
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
  };
// 4) Задать пользователю по 2 раза вопросы: 
let questionOne = prompt('Введите обязательную статью расходов в этом месяце','');
let questionTwo = prompt('Во сколько обойдется?','');
let questionThree = prompt('Введите обязательную статью расходов в этом месяце','');
let questionFour = prompt('Во сколько обойдется?','');

// Записать ответы в объект expenses в формате: 
appData.expenses = {
  [questionOne]:questionTwo,
  [questionThree]:questionFour,
};

// 5) Вывести на экран пользователя бюджет на 1 день
let budgetOneDay = money/30;
alert(budgetOneDay);


