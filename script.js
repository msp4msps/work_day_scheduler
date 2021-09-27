//Set Variables
var current = document.getElementById("currentDay");
var hour = document.querySelectorAll(".description");
var text = document.querySelector(".text");
var saveBtn = document.querySelector(".saveBtn");
var container = document.querySelector(".container");

//Add Current Date upon page load
current.textContent = moment().format("dddd, MMMM Do");

function checkTime() {
  for (i = 0; i < hour.length; i++) {
    //Set Format
    var format = "hh:mm";
    //Convert String to Number
    var hourToNum = parseInt(hour[i].id);
    //Compensate for Timespan
    var nextHour = hourToNum + 0.59;
    //Set Start and End Time
    var startTime = moment(`0${hour[i].id}`, format);
    var EndTime = moment(`0${nextHour}`, format);
    //Determine Background Color
    var currentTime = moment();
    if (currentTime.isBetween(startTime, EndTime)) {
      hour[i].setAttribute("class", " col-10 present description");
    } else if (currentTime < EndTime) {
      console.log("THis is working");
      hour[i].setAttribute("class", "col-10 future description");
    } else {
      hour[i].setAttribute("class", "col-10 past description");
    }
  }
}
checkTime();

//Save Calendar Items
container.addEventListener("click", function (event) {
  if (event.target.className === "fas fa-save fa-2x") {
    var newItem = event.target.parentElement.previousElementSibling.textContent;
    var item = event.target.parentElement.previousElementSibling.id;
    localStorage.setItem(`${item}-calendarEvent`, newItem);
  }
});

//Render Calendar Items
