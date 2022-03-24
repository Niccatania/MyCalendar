// add current time to the top of the calendar
var today = moment();
$("#currentDay").text(today.format("dddd MMM Do, YYYY"));


console.log(moment());

var storageInput = document.querySelector(".form-control");
var text = document.querySelector(".text");
var button = document.querySelector(".btn");
var currentBlock 
var currentTime = moment().format('h');


console.log(currentTime);



// I need to select the current block based on the current time
// Creating an array for each time block
var allBlocks = ["bl9", "bl10", "bl11", "bl12", "bl13", "bl14", "bl15", "bl16", "bl17"]
var date = new Date();

for( var i=0; i<9; i++ )
{
date.setHours(9 + i,0,0,0);

var row = document.getElementById(allBlocks[i]);

var currentBlock = moment().diff(date, "hours");

if (currentBlock === 0) {
    $(row).addClass("presentTime");
} 

else if (currentBlock > 0) {
    $(row).addClass("pastTime");
}

else {
    $(row).addClass("futureTime");
}
}

var inputZone=["In9", "In10", "In11", "In12", "In13", "In14", "In15", "In16", "In17"]

for( var i=0; i<9;i++ ) {
    document.getElementById(inputZone[i]).value=localStorage.getItem(inputZone[i]);
}

function btnClick(id){
var inputText =document.getElementById(id).value;
localStorage.setItem(id, inputText);
}

