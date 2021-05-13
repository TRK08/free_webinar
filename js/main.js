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
      secondsBox = document.querySelector('#seconds');
      timeBox = document.querySelector('.start-time');

      

    let currentDate = new Date(),
    endDate = new Date('May 20 2021 20:00:00'),
      gap = endDate - currentDate,
      days = Math.floor(gap / (1000 * 60 * 60 * 24)),
      hours = Math.floor((gap / (1000 * 60 * 60)) % 24),
      seconds = Math.floor((gap / 1000) % 60),
      minutes = Math.floor((gap / 1000 / 60) % 60);


    if (gap <= 0) {
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
  
  // Модальное окно
  function toggleModal() {
    const buttons = document.querySelectorAll('.reg-btn'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal-close'),
      formInputName = document.querySelector('.form-input-name'),
      formInputTel = document.querySelector('.form-input-tel'),
      formWordpress = document.querySelector('.modal-form'),
      modalBody = document.querySelector('.modal-body'),
      modalCheckbox = document.querySelector('.modal-checkbox'),
      modalBtn = document.querySelector('.form-btn'),
      modalThanks = document.querySelector('.modal-thanks');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        modal.classList.toggle('active');
        // document.body.style.overflow='hidden';
      })
    });
    modalClose.addEventListener('click', () => {
      modal.classList.toggle('active');
      // document.body.style.overflow='auto';
    });


    // FORM VALIDATE
    function validateForm() {
      let modalInputs = [formInputName, formInputTel, modalCheckbox];
      modalInputs.forEach(input => {
        modalBtn.disabled = true;
        input.addEventListener('input', () => {
          if (input.value.length > 0 && input.checked) {
            modalBtn.disabled = false;
          }
        })
      })
    }

    validateForm();
    

    formWordpress.addEventListener('submit', (event) => {
      event.preventDefault();
      if (formInputTel.value !== '' && formInputName.value !== '' && modalCheckbox.checked) {
        modalThanks.classList.toggle('active');
        modalBody.classList.toggle('hidden');
        if (document.body.contains(document.querySelector('.start-time'))) {
          setTimeout(function(){
            window.location.href = 'thanks.html'
          },2000)
        }
        else {
          setTimeout(function() {
            modal.classList.toggle('active');
          },2000);
        }
      }
      else {
        
      }
      // else {
      //   if(!modalCheckbox.checked) {
      //     document.querySelector('.modal-personal label').style.color = 'red';
      //   }
      //   else {
      //     document.querySelector('.modal-personal label').style.color = '#000';
      //   }
      // }
    });
  }

  toggleModal();


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


  if (document.body.contains(document.querySelector('.start-time'))) {
    countdown();
    setInterval(countdown, 1000);

  }


    
})