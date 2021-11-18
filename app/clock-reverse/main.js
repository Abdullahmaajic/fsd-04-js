
function difference(){

    let currentMoment = new Date();

    let targetMoment = new Date('jan 01 2022 10:00:47');

    let distance = targetMoment-currentMoment;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes; 
    document.querySelector('.seconds').innerHTML = seconds;

    // console.log(days,hours,minutes,seconds);

}

setInterval(difference,1000);