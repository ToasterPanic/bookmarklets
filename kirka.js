javascript: 
(function() {
  var eltIF = document.createElement("iframe");
  eltIF.setAttribute("src", "https://kirka.io");
  eltIF.setAttribute("width", "600px");
  eltIF.setAttribute("height", "300px");
  document.body.appendChild(eltIF);
  eltIF.scrollIntoView();
})();
