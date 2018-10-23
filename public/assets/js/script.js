let date = document.querySelector('.date-input');
let text_date = document.querySelector('.date-input+input');
let d = new Date();
let curr_date = d.getDate();
let curr_month = d.getMonth() + 1;
let curr_year = d.getFullYear();
let formated_date = (curr_date + "." + curr_month + "." + curr_year);
date.onchange = function() {
  if (date.value) {
    let days = date.value.split("-");

    var mil_s = new Date(date.value);
    if (mil_s < Date.now()) {
      text_date.value = formated_date;
    } else {
      text_date.value = (days[2] + "." + days[1] + "." + days[0]);
    }
  }
};

let party_num = document.querySelector('#reservations-number');
party_num.onchange = function() {
  party_num.style.color = "black";
};
