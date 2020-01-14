var calendar_blank_element = "",
  calendar_filled_element = "";

function filledboxes(filled) {
  var i;
  for (i = 0; i < filled; i++) {
    calendar_filled_element += `<div class="calendar-block-filled"></div>`;
  }

  var calendar_boxes = calendar_blank_element + calendar_filled_element;
  document.getElementById("rows").innerHTML = calendar_boxes;
}
function blankboxes(blank) {
  var i;
  for (j = 0; j < 10; j++) {
    for (i = 0; i < 2; i++) {
      calendar_blank_element += `<div class="calendar-block"></div>`;
    }
    calendar_blank_element += `<br><br>`;
  }
  filledboxes(1);
}

window.onload = blankboxes(10);
