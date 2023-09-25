let big_black = document.getElementById('big_black');
let big_orange = document.getElementById('big_orange');
let big_pink = document.getElementById('big_pink');
let big_yellow = document.getElementById('big_yellow');

let small_black = document.getElementById('small_black');
let small_orange = document.getElementById('small_orange');
let small_pink = document.getElementById('small_pink');
let small_yellow = document.getElementById('small_yellow');

let date = new Date(); // получаем сегодняшнюю дату и время
let deadlineTime = date.setHours(date.getHours() + 5); // устанавливаем таймер на 5 xfcjr
// обновляем скрипт каждую секунду - так мы получаем обратный отсчет
let obratniyOtschet = setInterval(function() {
    let now = new Date().getTime(); // текущее время
    let rest = deadlineTime - now; // находим различие между текущим моментом и временем дедлайна
    // преобразовываем значение миллисекунд в минуты и секунды
    let hours = Math.floor(rest % (1000 * 60 * 60 * 60) / (1000 * 60 * 60));
    let min = Math.floor( (rest % (1000 * 60 * 60)) / (1000 * 60) );
    let sec = Math.floor( (rest % (1000 * 60)) / 1000 );
    // если значение текущей минуты или секунды меньше 10, добавляем вначале ведущий ноль
    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    // отображаем результат таймера в элементе с id="timer"
    document.getElementById("timer").innerHTML = hours + ":" + min + ":" + sec;
}, 1000);//обновление каждую секунду

small_black.addEventListener('click', function (e){
    big_black.classList.add('vision');
    big_orange.classList.add('hide');
    big_pink.classList.add('hide');
    big_yellow.classList.add('hide');
    big_black.classList.remove('hide')
    big_orange.classList.remove('vision');
    big_pink.classList.remove('vision');
    big_yellow.classList.remove('vision');
    console.log('нажат small_black');
})

small_orange.addEventListener('click', function (e){
    big_orange.classList.add('vision');
    big_black.classList.add('hide');
    big_pink.classList.add('hide');
    big_yellow.classList.add('hide');
    big_orange.classList.remove('hide');
    big_black.classList.remove('vision');
    big_pink.classList.remove('vision');
    big_yellow.classList.remove('vision');
    console.log('нажат small_orange');

})

small_pink.addEventListener('click', function (e){
    big_pink.classList.add('vision');
    big_black.classList.add('hide');
    big_orange.classList.add('hide');
    big_yellow.classList.add('hide');
    big_pink.classList.remove('hide');
    big_orange.classList.remove('vision');
    big_black.classList.remove('vision');
    big_yellow.classList.remove('vision');
    console.log('нажат small_pink');
})

small_yellow.addEventListener('click', function (e){
    big_yellow.classList.add('vision');
    big_black.classList.add('hide');
    big_pink.classList.add('hide');
    big_orange.classList.add('hide');
    big_yellow.classList.remove('hide');
    big_orange.classList.remove('vision');
    big_pink.classList.remove('vision');
    big_black.classList.remove('vision');
    console.log('нажат small_byellow');
})