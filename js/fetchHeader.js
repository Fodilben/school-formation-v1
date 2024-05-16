const headerContainer = document.getElementById("header-container");
const navbarContainer = document.getElementById("nav-container");

fetch("./header.html")
  .then((response) => response.text())
  .then((html) => {
    headerContainer.innerHTML = html;
  })
  .catch((error) => {
    console.error("Error loading navbar:", error);
  });

fetch("./nav.html")
  .then((response) => response.text())
  .then((html) => {
    navbarContainer.innerHTML = html;
  })
  .catch((error) => {
    console.error("Error loading navbar:", error);
  });
