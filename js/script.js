import SliderCard from "./slider_1.js";
import postData from "./form.js";

new SliderCard(
    "/img/watch_1.png",
    "img",
    'casio',
    "Цена: 12 500 руб.",
    
).render();

new SliderCard(
    "/img/watch_2.png",
    "img",
    'epson',
    "Цена: 12 700 руб.",
    
).render();

new SliderCard(
    "/img/watch_3.png",
    "img",
    'omega',
    "Цена: 10 000 руб.",
   
).render();

new SliderCard(
    "/img/watch_4.png",
    "img",
    'chanel',
    "Цена: 11 400 руб.",
    
).render();

new SliderCard(
    "/img/watch_5.png",
    "img",
    'rolex',
    "Цена: 11 600 руб.",
    
).render();

new SliderCard(
    "/img/watch_5.png",
    "img",
    'garmin',
    "Цена: 11 600 руб.",
    
).render();



let cards = document.querySelectorAll('.slider-card');
let btnLeft = document.querySelector('.button-left');
let btnRight = document.querySelector('.button-right');
let sliderBox = document.querySelector('.slider-card__box');

let cardStyles = window.getComputedStyle(cards[0]);
let width = cardStyles.getPropertyValue('width');
let cardWidth = Number(width.slice(0, width.length - 2)) + 30;

let sliderBoxStyles = window.getComputedStyle(sliderBox);
let sliderBoxStylesWidth = sliderBoxStyles.getPropertyValue('width');
let sliderWidth = Number(sliderBoxStylesWidth.slice(0, sliderBoxStylesWidth.length - 2)) + 30;


let left = 0;
btnRight.addEventListener('click', () => {

    console.log(sliderWidth);
    left = left - cardWidth;
    if (left < -(sliderWidth - (cardWidth * 3))) {
        left = 0;
    }
    sliderBox.style.transform = `translateX(${left}px)`;
});



btnLeft.addEventListener('click', () => {

    if (left >= 0) {
        left = -(sliderWidth - (cardWidth + cardWidth));
    }
    left = left + cardWidth;
    sliderBox.style.transform = `translateX(${left}px)`;

});

//======= modal__form =======

let orders = document.querySelectorAll('.card__button');
let nameGoods = document.querySelector('.name-goods');
let modal = document.querySelector('.modal');
let imgGoods = document.querySelectorAll('.card__img');

sliderBox.addEventListener('click', function(elem){
    let action = elem.target.dataset.name;
    nameGoods.value = action;
    console.log(elem.src);

});


orders.forEach(function(order){
    order.addEventListener('click', function(ev){
        ev.preventDefault;
        modal.classList.remove('disactive');
        
    })


});

modal.addEventListener('click', function(elem){
    let action = elem.target;
    if(action.classList.contains('modal')){
        modal.classList.add('disactive');
   
    }else{
        console.log('false')
    }
});

postData();
