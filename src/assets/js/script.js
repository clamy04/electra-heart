function hide() {
  var h = document.getElementById("visible");
  var s = document.getElementById("hidden");
  h.classList.replace("visible", "hidden");
  h.id = "hidden";
  s.id = "visible";
}
