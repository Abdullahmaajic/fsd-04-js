/*
write click event for a tag
get class name of this element
hide all cards
show cards with specific class name
*/

//1. write click event for each tag 

let filterWrapper  = document.getElementById('filter-1'),
    allLinks = filterWrapper.querySelectorAll('.filter-link');

function hideCards(){
    let cards = document.querySelectorAll('.card');

    cards.forEach(function(cardAll){
        cardAll.style.display = 'none';
    });
}

function showCard(classType){

    if(classType == "all"){
        cardType = '.card';
    }
    else{
        cardType = '.'+classType;
    }
    
    let cardTypeAll = filterWrapper.querySelectorAll(cardType);
        
    cardTypeAll.forEach(function(cardEach){
        cardEach.style.display = 'block';
    })

}


function printMe(item){

        // write click event for a tag

    item.addEventListener('click',function(){

        // get class name of this element

        let currentMoment = this,
            selectClass = currentMoment.classList[1];       

            console.log(currentMoment);
        
        console.log(selectClass);

        hideCards();
        showCard(selectClass);

       
    });

    
}


allLinks.forEach(printMe);
