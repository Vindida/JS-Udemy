"use strict";

let startBtn = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');

let buttonExp = document.getElementsByTagName('button')[0];
let buttonOpt = document.getElementsByTagName('button')[1];
let buttonCount = document.getElementsByTagName('button')[2];

buttonExp.disabled = true;
buttonOpt.disabled = true;
buttonCount.disabled = true;

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;
let sum = 0;

startBtn.addEventListener('click', function() {
   
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

   while(isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
   }
   appData.budget = money;
   appData.timeData = time;
   budgetValue.textContent = money.toFixed();
   yearValue.value = new Date(Date.parse(time)).getFullYear();
   monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
   dayValue.value = new Date(Date.parse(time)).getDate();

   buttonExp.disabled = false;
   buttonOpt.disabled = false;
   buttonCount.disabled = false;

  });

buttonExp.addEventListener('click', function() {

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
        sum += +b;
    } else {
      i = i - 1;
    }
  }
  expensesValue.textContent = sum;
});

buttonOpt.addEventListener('click',function() {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

buttonCount.addEventListener('click', function() {
  if (appData.budget != undefined){
    appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
  
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    budgetValue.textContent = "Произошла ошибка";
  }
});

chooseIncome.addEventListener('input', function() {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
      appData.savings = false;
    } else {
      appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
      let sum = +sumValue.value,
          percent = +percentValue.value;
      appData.monthIncome = sum/100/12*percent;
      appData.yearIncome = sum/100*percent;
      
      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
      let sum = +sumValue.value,
          percent = +percentValue.value;

      appData.monthIncome = sum/100/12*percent;
      appData.yearIncome = sum/100*percent;

      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};




 

