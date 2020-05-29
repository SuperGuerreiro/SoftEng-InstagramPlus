const PHOTO_FORMAT = "photo";
const RELATIVE_PATH = "../../";

function createPost() { //camelCaseCringe() 
	// chama controler porque sou um moço prendado
	create_post(
		document.getElementById("description").value,
		document.getElementById("filter-figure-id").className,
		postLoc = document.getElementById("location").value,
		localStorage.getItem(TMP_FILE_LOCATION) //cuidado com este argumento
	);
}

window.onload = function () {
	var fileLoc = localStorage.getItem(TMP_FILE_LOCATION);
	var fileFormat = localStorage.getItem(TMP_FILE_FORMAT);
	if (fileFormat == PHOTO_FORMAT) {
		document.getElementById("load-content").innerHTML = //faz elemento img dentro da div correcta
			"<img src=" + RELATIVE_PATH + fileLoc + ">";
	} else { //se não é foto, é obrigatoriamente video (dado que já confirmamos antes)
		document.getElementById("load-content").innerHTML =
			"<video autoplay loop muted><source src=" +
			RELATIVE_PATH + fileLoc +
			" type='video/mp4'>Your browser does not support the video tag.</video>"
	}
}
