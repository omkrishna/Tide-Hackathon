function ToggleStartNavigation(event) {
  var elem = event;
  var sel = document.querySelector(".selected");
  sel.classList.remove("selected");
  elem.classList.add("selected");
}
