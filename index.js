
//variables globales
var url_base = " ";
var url_param = ["",""];


function initpage(){
//recupération de parametre de l'URL
var url_string = (window.location +"?=").toString();
var url_array = url_string.split("?");
url_base = url_array[0] //adresse de base
var param = url_array[1].split("=");  //0=nom du parametre 1=valeur du parametre





if (param[0]=="arti"){
jmpArticle(param[1]);
}


if (param[0]=="rech"){
	var elem = document.getElementById('corp');
	document.title = "recherche";
	elem.innerHTML = "désolé mais pas de recherche pour l'instant";
}




if (param[0]!="arti"){
	var u = document.getElementById("listePage");
	u.innerHTML = "" ;
	var test = ["4","conversion LBA vers CHS","10","Mortimer 0.14","12","Commandes Hayes pour modem","31","codage utf8","35","résumé HTML et CSS","39","SeLG"]; //a remplacer par des infos sur fichier exterieur plus tard
	for (let i=0;i<test.length;i = i+2){
		u.innerHTML = u.innerHTML + '<a href="'+url_base+'?arti=' + test[i]+ '">'+ test[i+1]+ '</a><br/>';
	}
}



}//fin initpage





function jmpArticle(index) {
//récupère les éléments

const adresse = url_base +"A"+index+".txt"
var request = new XMLHttpRequest();
request.open('GET', adresse, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
	const data = request.responseText.split("|");

	//modifie les éléments
	var elem = document.getElementById('corp');
	document.title = data[0];
	elem.innerHTML = data[8].replace(/\n\r?/g,"<br/>"); //remplace tout les sauts de lignes
        }
    }
}




function jmpArticle_new(index) {
//récupère les éléments
var contenue_fichier = "";
var contenue_fichier = lire_fichier(url_base +"A"+index+".txt");
//affiche les éléments
if (contenue_fichier != "") {
	//modifie les éléments
	const data = contenue_fichier.split("|");
	var elem = document.getElementById('corp');
	document.title = data[0];
	elem.innerHTML = data[8].replace(/\n\r?/g,"<br/>"); //remplace tout les sauts de lignes
        }
}




function lire_fichier(adresse) {

var request = new XMLHttpRequest();
var contenue = "";
request.open('GET',adresse, true);
	request.send(null);
	request.onreadystatechange = function () {
        	if (request.readyState === 4 && request.status === 200) {
		contenue = request.responseText;
		return contenue;
		}
	}
}







function rech() {
alert("Hélas! pas de recherche disponible pour l'instant");
}



