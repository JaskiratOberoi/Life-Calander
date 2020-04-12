var calendar_blank_element = "";
var calendar_filled_element = "";

let ageBtn = document.getElementById("age-btn");

ageBtn.addEventListener("click", ageImporter);

function filledboxes(filled) {
  var j;
  calendar_filled_element = " ";
  for (j = 0; j < filled; j++) {
    calendar_filled_element += `<div class="calendar-block-filled"></div>`;
  }
  return calendar_filled_element;
}

function blankboxes(blank) {
  var i;
  calendar_blank_element = " ";
  for (i = 0; i < blank; i++) {
    calendar_blank_element += `<div class="calendar-block"></div>`;
  }
  return calendar_blank_element;
}

function valueInsert(leftWeeks, weekCount) {
  calendar_empty = blankboxes(leftWeeks);
  calendar_full = filledboxes(weekCount);
  var calendar_boxes = calendar_full + calendar_empty;
  document.getElementById("rows").innerHTML = calendar_boxes;
}

function calendarCreation(age) {
  var weekCount = age * 12;
  var leftWeeks = 1020 - weekCount;
  valueInsert(leftWeeks, weekCount);
}

function ageImporter() {
  var userAge = document.getElementById("agevalue").value;
  calendarCreation(userAge);
  document.getElementById("agevalue").value = "";
  document.getElementById("cr").className = "clear";
}
