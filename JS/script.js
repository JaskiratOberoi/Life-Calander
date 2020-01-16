var calendar_blank_element = "";
var calendar_filled_element = "";

function filledboxes(filled) {
  var j;
  for (j = 0; j < filled; j++) {
    calendar_filled_element += `<div class="calendar-block-filled"></div>`;
  }
  return calendar_filled_element;
}

function blankboxes(blank) {
  var i;

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
  var leftWeeks = 900 - weekCount;
  valueInsert(leftWeeks, weekCount);
}

function ageImporter() {
  var userAge = document.getElementById(agevalue);
  calendarCreation(userAge);
}

document.getElementById("ageButton").onclick = ageImporter;
