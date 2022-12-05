var x = document.getElementById("iconMenu");
var firstElement = document.getElementById("firstElement");
var secondElement = document.getElementById("secondElement");
var thirdElement = document.getElementById("thirdElement");
var fourthElement = document.getElementById("fourthElement");
var navbar = document.getElementById("myTopnav");
var numero = 1; 
var myBool = false;

function myFunction() {
    if (myBool == false) {
        firstElement.style.display = 'block';
        secondElement.style.display = 'block';
        thirdElement.style.display = 'block';
        fourthElement.style.display = 'block';
        myBool = true;
    } else {
        if (numero == 1)  {
            firstElement.style.display = 'block';
//             navbar.style.marginTop = "15px";
            secondElement.style.display = 'none';
            thirdElement.style.display = 'none';
            fourthElement.style.display = 'none';
        }
        if (numero == 2)  {
            firstElement.style.display = 'none';
//             navbar.style.marginTop = "15px";
            secondElement.style.display = 'block';
            thirdElement.style.display = 'none';
            fourthElement.style.display = 'none';
        }
        if (numero == 3)  {
            firstElement.style.display = 'none';
//             navbar.style.marginTop = "15px";
            secondElement.style.display = 'none';
            thirdElement.style.display = 'block';
            fourthElement.style.display = 'none';
        }
        if (numero == 4)  {
            firstElement.style.display = 'none';
//             navbar.style.marginTop = "15px";
            secondElement.style.display = 'none';
            thirdElement.style.display = 'none';
            fourthElement.style.display = 'block';
        }
        myBool = false;
    }
}

firstElement.addEventListener('click', function() {
    firstElement.style.fontSize = '1.5em';
    secondElement.style.fontSize = '1em';
    thirdElement.style.fontSize = '1em';
    fourthElement.style.fontSize = '1em';
    numero = 1;
}, false);

secondElement.addEventListener('click', function() {
    firstElement.style.fontSize = '1em';
    secondElement.style.fontSize = '1.5em';
    thirdElement.style.fontSize = '1em';
    fourthElement.style.fontSize = '1em';
    numero = 2;
}, false);

thirdElement.addEventListener('click', function() {
    firstElement.style.fontSize = '1em';
    secondElement.style.fontSize = '1em';
    thirdElement.style.fontSize = '1.5em';
    fourthElement.style.fontSize = '1em';
    numero = 3;
}, false);

fourthElement.addEventListener('click', function() {
    firstElement.style.fontSize = '1em';
    secondElement.style.fontSize = '1em';
    thirdElement.style.fontSize = '1em';
    fourthElement.style.fontSize = '1.5em';
    numero = 4;
}, false);    
firstElement.addEventListener('mouseenter', (event) => {
    firstElement.style.fontSize = '1.5em';
    secondElement.style.fontSize = '1em';
    thirdElement.style.fontSize = '1em';
    fourthElement.style.fontSize = '1em';
    numero = 1;
});

secondElement.addEventListener('mouseenter', (event) => {
    firstElement.style.fontSize = '1em';
    secondElement.style.fontSize = '1.5em';
    thirdElement.style.fontSize = '1em';
    fourthElement.style.fontSize = '1em';
    numero = 2;
});

thirdElement.addEventListener('mouseenter', (event) => {
    firstElement.style.fontSize = '1em';
    secondElement.style.fontSize = '1em';
    thirdElement.style.fontSize = '1.5em';
    fourthElement.style.fontSize = '1em';
    numero = 3;
});

fourthElement.addEventListener('mouseenter', (event) => {
    firstElement.style.fontSize = '1em';
    secondElement.style.fontSize = '1em';
    thirdElement.style.fontSize = '1em';
    fourthElement.style.fontSize = '1.5em';
    numero = 4;
});
