function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
window.addEventListener('load', function() {
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
const currentPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
console.log(currentPath);  
switch(currentPath) {
  case "/home":
    btns[0].className += " active";
    break;
  case "/contact":
    btns[1].className += " active";
    break;
  case "/about":
    btns[2].className += " active";
    break;
  // more cases can be added here
  default:
    break;
  }
});  