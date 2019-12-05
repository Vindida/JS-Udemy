"use strict";

let item = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');

menu.insertBefore(item[2], item[1]);

let new_item = document.createElement('li');
new_item.classList.add('menu-item');
menu.appendChild(new_item);
new_item.textContent = 'Пятый пункт';

document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');
adv.remove();

let question = prompt('Ваше отношение к технике Apple','клево');
let answer = document.getElementById('prompt');
answer.textContent = question;

