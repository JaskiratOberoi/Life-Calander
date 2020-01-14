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
  for (i = 0; i < blank; i++) {
    calendar_blank_element += `<div class="calendar-block"></div>`;
  }

  filledboxes(10);
}

window.onload = blankboxes(10);
