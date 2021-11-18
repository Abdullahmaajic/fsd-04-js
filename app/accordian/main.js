
let buttons = document.querySelectorAll('.question-btn');
// console.log(buttons);

function hideAll(){
    let text = document.querySelectorAll('.question-text');
    text.forEach(function(textHidden){
    textHidden.style.display = 'none';

function printMe(item){

    item.addEventListener('click',function(){

        //click & select the button

        let currentMoment = this ;  //select particular button
        questionWrapperElemnt = currentMoment.parentNode.parentNode;
        questionTextElement = questionWrapperElemnt.querySelector('.question-text');
        
        console.log(questionTextElement);

        // hide

        hideAll();

        //apply style

        questionTextElement.style.display = 'block';
    });

}

buttons.forEach(printMe);  