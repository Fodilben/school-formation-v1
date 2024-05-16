function openNav() {
  document.getElementById("nav-container").style.width = "25%";
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("openbtn").style.display = "none";
  document.getElementById("closebtn").style.display = "block";
}

function closeNav() {
  document.getElementById("nav-container").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("openbtn").style.display = "block";
  document.getElementById("closebtn").style.display = "none";
}
