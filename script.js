console.log('hi world');
var redClicks = 0;
var blueClicks = 0;
var greenClicks = 0;
var yellowClicks = 0;

$(document ).ready( readyNow );

function readyNow(){
$('.redButton').on('click', appearRedBox);
$('.blueButton').on('click', appearBlueBox);
$('.greenButton').on('click', appearGreenBox);
$('.yellowButton').on('click', appearYellowBox);

}

function appearRedBox(){
    console.log('Hi red');
        $('body').append('<p id = "red-box"></p>');
        redClicks++;
        document.getElementById("redNumbers").innerHTML = redClicks;
    }


function appearBlueBox(){
    $('body').append('<p id = "blue-box"></p>');
    blueClicks++;
    document.getElementById("blueNumbers").innerHTML = blueClicks;
}

function appearGreenBox(){
    $('body').append('<p id = "green-box"></p>');
    greenClicks++;
    document.getElementById("greenNumbers").innerHTML = greenClicks;
}

function appearYellowBox(){
    $('body').append('<p id = "yellow-box"></p>');
    yellowClicks++;
    document.getElementById("yellowNumbers").innerHTML = yellowClicks;
}
