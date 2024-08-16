//prérequis: avoir un "<div id="webring">[nom de votre projet]</div>" dans la page
//le div sera alors remplit par une liste de liens vers les autres sites du webring (sauf le votre)

//on charge le json
const adresse = "https://webring.devse.wiki/webring.json"
var request = new XMLHttpRequest();
request.open('GET', adresse, true);
request.responseType = "json";
request.send();

//des que les données sont reçu on traite les données de la base
request.onload = function () {
	var nom = document.getElementById("webring").innerHTML;
	var webring = request.response;
	var objet ="";
	for (var i = 0; i < webring.length; i++) {
		if (webring[i].name != nom){
			objet = objet +'<a href="'+webring[i].protocols.http.clearnet+'" title="'+webring[i].description+'"><button class="webring"><img src="'+webring[i].protocols.http.clearnet+'/favicon.ico" class="webring">'+webring[i].name+'</button></a> '; //ligne a ajuster si vous voulez modifier l'apparence des liens 

		}
	}
document.getElementById("webring").innerHTML = objet;


var elements = document.getElementsByClassName('webring');
for (var i = 0; i < elements.length; i++) {
  elements[i].setAttribute('onerror', "this.style.display='none';");
}

};