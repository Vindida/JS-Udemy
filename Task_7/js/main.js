"use strict";

let start = document.getElementById('start');
console.log(start);

let table = document.querySelector('.result-table');
let values = table.querySelectorAll('div');

values.forEach(function(item) {
	if (item.className.split('-')[1] == 'value') {
		console.log(item)
	}
});


let inputs = document.getElementsByClassName('expenses-item');
for (let i = 0; i < inputs.length; i++) {
  console.log(inputs[i]);
}


let buttons = document.getElementsByTagName('button');
let buttonExp = document.querySelector('.expenses-item-btn')
let buttonOpt = document.querySelector('.optionalexpenses-btn')
let buttonCount = document.querySelector('.count-budget-btn')

console.log(buttonExp);
console.log(buttonCount);

let optExpenses = document.querySelectorAll('.optionalexpenses-item');
for (let i = 0; i < optExpenses.length; i++) {
  console.log(optExpenses[i]);
}
  
let chooseIncome = document.querySelector('#income');
console.log(chooseIncome);
let savings = document.querySelector('#savings');
console.log(savings);
let sum = document.querySelector('#sum');
console.log(sum);
let percent = document.querySelector('#percent');
console.log(percent);
let year = document.querySelector('.year-value');
console.log(year);
let month = document.querySelector('.month-value');
console.log(month);
let day = document.querySelector('.day-value');
console.log(day);