sd4s.main = function() {
  var head = document.getElementsByTagName('HEAD')[0]; //gets head element 
  var link = document.createElement('link'); //creates link to style.css
  link.rel = 'stylesheet';   
  link.type = 'text/css';
  link.href = 'https://raw.githubusercontent.com/lukasexists/scratch-dark4school/main/style.css'; 
  head.appendChild(link); //appends stuff
};

window.sd4s.main();
