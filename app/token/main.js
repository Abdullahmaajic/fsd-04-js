
let token = 0;
let counter = document.getElementById('counter');
let displayNumber = document.getElementById('display');

counter.addEventListener('click',function(){

    token = token + 1;
    displayNumber.innerHTML = token;

});