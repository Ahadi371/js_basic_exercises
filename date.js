
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1; 
let year = date.getFullYear(); 
day = day < 10 ? '0' + day :day;
month = month < 10 ? '0'+ month: month;

let fullDate = day + "-" + month + "-" + year;
let todayDate = month + "-" + day + "-" + year;
document.getElementById('today').innerHTML = fullDate;
document.getElementById('today-date').innerHTML = todayDate;
