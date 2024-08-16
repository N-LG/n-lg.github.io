


function initpage(){
var elements = document.getElementsByClassName('petit');
for (var i = 0; i < elements.length; i++) {
  elements[i].setAttribute('onmouseover', 'up(this)');
}
up(elements[0]);
}


function up(e){
var elements = document.getElementsByClassName('petit');
for (var i = 0; i < elements.length; i++) {
  elements[i].setAttribute('onmouseover', 'up(this)');
  elements[i].style.width = "100px";
  elements[i].style.transform  = 'skewY(20deg)';
}


e.style.width = "200px";
e.style.transform  = 'none';
document.getElementById("affichage").src = e.src;
document.getElementById("affichage").title = e.title;
document.getElementById("legende").innerHTML = e.title;
}

