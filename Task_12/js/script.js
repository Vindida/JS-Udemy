

window.addEventListener('DOMContentLoaded', function() {
  "use strict";
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent')

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(event) {
    let target = event.target;
    if(target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0); 
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer
  function addZero(num){
    if(num<10){
      return '0'+ num;
    }else{
      return num;
    }
  }

  let deadline = '2020-06-01';

  
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));
    // hours = Math.floor((t/1000/60/60) % 24); остаток с часами
    // days = Math.floor((t/(1000/60/60*24))); дни
    
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let updateClock = () => {
      let t = getTimeRemaining(endtime);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }

    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'), 
        timeInterval = setInterval(updateClock, 1000);    
  }
  setClock('timer', deadline);

  // Modal

  let more = document.querySelector('.more'),
      overlay =document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtns = document.querySelectorAll('.description-btn');

  for (let i = 0; i < descriptionBtns.length; i++) {
      descriptionBtns[i].addEventListener('click', function() {
        overlay.style.display  = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
      });     
  }   


  more.addEventListener('click', function() {
    overlay.style.display  = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function() {
      overlay.style.display  = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
  });

});