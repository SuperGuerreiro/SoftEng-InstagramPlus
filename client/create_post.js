const PHOTO_FORMAT = "photo";
const RELATIVE_PATH= "../../";

function createPost() { //camelCaseCringe() 
	var postFilter = document.getElementById("filter-figure-id").className;
	var postDesc = document.getElementById("description").value;
	var postLoc = document.getElementById("location").value;

	// chama controler porque sou um moço prendado
	create_post(postDesc, postFilter, postLoc, localStorage.getItem(TMP_FILE_LOCATION)); //cuidado com este ultimo argumento
	//window.location.replace("HTML PARA ONDE QUERES REDIRECIONAR AQUI");
}

window.onload = function () {
	var fileLoc = localStorage.getItem(TMP_FILE_LOCATION);
	var fileFormat = localStorage.getItem(TMP_FILE_FORMAT);
	if (fileFormat == PHOTO_FORMAT) {
		//faz elemento img dentro da div correcta
		document.getElementById("load-content").innerHTML = "<img src=" + RELATIVE_PATH + fileLoc + ">";
	} else {
		//se não é foto, é obrigatoriamente video (dado que já confirmamos antes)
		document.getElementById("load-content").innerHTML =
			"<video autoplay loop muted><source src=" +
			RELATIVE_PATH + fileLoc +
			" type='video/mp4'>Your browser does not support the video tag.</video>"
	}
}
