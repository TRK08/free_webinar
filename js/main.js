document.addEventListener('DOMContentLoaded', () => {

  // SmoothScroll
  var scroll = new SmoothScroll('a[href*="#"]');

  // WOW.js
  new WOW().init();

  // Добавление таймера обратного отсчета
  function countdown() {
    const daysBox = document.querySelector('#days'),
      hoursBox = document.querySelector('#hours'),
      minutesBox = document.querySelector('#minutes'),
      secondsBox = document.querySelector('#seconds'),
      timeBox = document.querySelector('.start-time');

    let currentDate = new Date(),
    endDate = new Date('May 20 2021 20:00:00'),
      gap = endDate - currentDate,
      days = Math.floor(gap / (1000 * 60 * 60 * 24)),
      hours = Math.floor((gap / (1000 * 60 * 60)) % 24),
      seconds = Math.floor((gap / 1000) % 60),
      minutes = Math.floor((gap / 1000 / 60) % 60);


    if (gap < 0) {
      timeBox.innerHTML = '<h2>Акция закончилась</h2>'
    }
    else {
      addZero(days, daysBox);
      addZero(hours, hoursBox);
      addZero(minutes, minutesBox);
      addZero(seconds, secondsBox);
    }

    // Добавление 0 перед временем таймера
    function addZero(item, itemBox) {
      if (item < 10) {
        itemBox.innerText = '0' + item
      }
      else {
        itemBox.innerText = item
      }
    }

  };
  countdown()
  setInterval(countdown, 1000);


  // Модальное окно
  function toggleModal() {
    const buttons = document.querySelectorAll('.reg-btn'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal-close'),
      modalBtn = document.querySelector('.form-btn'),
      modalWrap = document.querySelector('.modal__wrap')

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        modal.classList.toggle('active');
        document.body.style.overflow='hidden';
      })
    });
    modalClose.addEventListener('click', () => {
      modal.classList.toggle('active');
      document.body.style.overflow='auto';
    });
    modalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // modalWrap.innerHTML = '<h2>Спасибо за регистрацию</h2> '
      // setTimeout(function() {
      //   modal.classList.toggle('active');
      // }, 3000);
      // document.body.style.overflow='auto';
    })
  }
  toggleModal()


  // Мобильное меню
  function toggleMobMenu () {
    const mobMenu = document.querySelector('.header-nav'),
        burger = document.querySelector('.header-burger');

    burger.addEventListener('click', () => {
        mobMenu.classList.toggle('active');
        burger.classList.toggle('open');
    })
  }

  toggleMobMenu()
})