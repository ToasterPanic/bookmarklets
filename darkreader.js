javascript:
/* Dark Reader, compressed into a bookmarklet. Made for Summit Learning, but other websites should work too. */
var scr = document.createElement("SCRIPT");
scr.src = "https://cdnjs.cloudflare.com/ajax/libs/darkreader/4.9.58/darkreader.min.js";
scr.onload = function(){
  DarkReader.enable({
    brightness: 100,
    contrast: 90,
    sepia: 10
  });
};
document.body.appendChild(scr);
var curTitleForDR = document.title;
document.title = "Dark Reader Bookmarklet by LukasExists";
function resetTitleForDR() {
  document.title = curTitleForDR;
}
setTimeout(resetTitleForDR, 2000);
