/*

1. Trigger event when click the button
2. generate random color
3. apply color to the body

*/

// 1. Trigger event when click the button

let myButton = document.getElementById("color-generater");

myButton.addEventListener('click',function(){

    let bodyTag = document.getElementById('body-tag');
    bodyTag.style.backgroundColor = getRandomColor();

    let hTag = document.getElementById('color');
    hTag.innerHTML = getRandomColor();

});
 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. generate random color


function getRandomColor(){

    let red,green,blue,style,
    head = 'rgb(',
    seperator = ' ',
    tail = ')';

    red =  getRandomInt(0, 255);
    green =  getRandomInt(0, 255);
    blue =  getRandomInt(0, 255);

    style = head + red + seperator + green + seperator + blue + seperator + tail;

    return style;
}
