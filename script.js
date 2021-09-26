var current = document.getElementById("currentDay");

console.log(current);

current.textContent = moment().format("dddd, MMMM Do");
