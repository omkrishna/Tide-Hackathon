function ToggleStartNavigation(event) {
  var elem = event;
  var sel = document.querySelector(".selected");
  sel.classList.remove("selected");
  elem.classList.add("selected");
  var elem_str = elem.children[0].innerHTML.toLowerCase() + "-container";
  var sel_str = sel.children[0].innerHTML.toLowerCase() + "-container";
  document.getElementById(sel_str).style.display = "none";
  document.getElementById(elem_str).style.display = "flex";
}
