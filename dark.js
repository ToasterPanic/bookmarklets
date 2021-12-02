var script = document.createElement('script');
script.onload = function() {
  alert("Script loaded and ready");
};
script.src = "https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);
