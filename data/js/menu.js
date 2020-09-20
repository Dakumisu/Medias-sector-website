let firstMain = document.querySelector('#first-btn');
let secondMain = document.querySelector('#second-btn');
let thirdMain = document.querySelector('#third-btn');
let fourthMain = document.querySelector('#fourth-btn')

let secondFirst = document.querySelector('#second-btn-first');
let thirdFirst = document.querySelector('#third-btn-first');
let fourthFirst = document.querySelector('#fourth-btn-first');

let firstSecond = document.querySelector('#first-btn-second');
let thirdSecond = document.querySelector('#third-btn-second');
let fourthSecond = document.querySelector('#fourth-btn-second');

let firstThird  = document.querySelector('#first-btn-third');
let secondThird = document.querySelector('#second-btn-third');
let fourthThird = document.querySelector('#fourth-btn-third');

let firstFourth  = document.querySelector('#first-btn-fourth');
let secondFourth = document.querySelector('#second-btn-fourth');
let thirdFourth = document.querySelector('#third-btn-fourth');

let firstLink = "#first";
let secondLink = "#second";
let thirdLink = "#third";
let fourthLink = "#fourth";


firstMain.addEventListener('click', function(){
    document.location.assign(firstLink);
});

secondMain.addEventListener('click', function(){
    document.location.assign(secondLink);
});

thirdMain.addEventListener('click', function(){
    document.location.assign(thirdLink);
});



secondFirst.addEventListener('click', function(){
    document.location.assign(secondLink);
});

thirdFirst.addEventListener('click', function(){
    document.location.assign(thirdLink);
});



firstSecond.addEventListener('click', function(){
    document.location.assign(firstLink);
});

thirdSecond.addEventListener('click', function(){
    document.location.assign(thirdLink);
});



firstThird.addEventListener('click', function(){
    document.location.assign(firstLink);
});

secondThird.addEventListener('click', function(){
    document.location.assign(secondLink);
});



firstFourth.addEventListener('click', function(){
    document.location.assign(firstLink);
});

secondFourth.addEventListener('click', function(){
    document.location.assign(secondLink);
});

thirdFourth.addEventListener('click', function(){
    document.location.assign(thirdLink);
});


fourthMain.addEventListener('click', function(){
    document.location.assign(fourthLink);
})


fourthFirst.addEventListener('click', function(){
    document.location.assign(fourthLink);
})


fourthSecond.addEventListener('click', function(){
    document.location.assign(fourthLink);
})


fourthThird.addEventListener('click', function(){
    document.location.assign(fourthLink);
})
