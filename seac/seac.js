


function initpage(){
var elements = document.getElementsByClassName('petit');
for (var i = 0; i < elements.length; i++) {
  elements[i].setAttribute('onmouseover', 'up(this)');
  elements[i].setAttribute('onmouseout', 'down(this)');
}
}

function up(e){
e.style.boxShadow = "2px 2px 2px #303030";
e.style.position = "relative";
e.style.top = "-1px";
e.style.left = "-1px";
e.style.transform  = 'rotate(10deg)';
document.getElementById("affichage").src = e.src;
document.getElementById("affichage").title = e.title;
document.getElementById("legende").innerHTML = e.title;
}

function down(e){
e.style.boxShadow = "0px 0px";
e.style.position = "static";
e.style.transform  = 'rotate(0deg)';
}