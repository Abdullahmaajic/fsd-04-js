
// let dayElement = document.getElementById('days');

// let hoursElement = document.getElementById('hours');

// let minutesElement = document.getElementById('minutes');

// let secondsElement = document.getElementById('seconds');


function currentMoment(){

let timeStamp =  new Date();

console.log(timeStamp);

//      using additional key word

// dayElement.innerHTML = timeStamp.getDay();

// hoursElement.innerHTML = timeStamp.getHours();

// minutesElement.innerHTML = timeStamp.getMinutes();

// secondsElement.innerHTML = timeStamp.getSeconds();


//      using querySelector key word


document.querySelector('#days').innerHTML = timeStamp.getDay();

document.querySelector('#hours').innerHTML = timeStamp.getHours();

document.querySelector('#minutes').innerHTML = timeStamp.getMinutes();

document.querySelector('#seconds').innerHTML = timeStamp.getSeconds();


// console.log(timeStamp.getFullYear());

// console.log(timeStamp.getMonth());

// console.log(timeStamp.getDay());

// console.log(timeStamp.getDate());

// console.log(timeStamp.getSeconds());


}

// currentMoment();

setInterval(currentMoment, 1000);