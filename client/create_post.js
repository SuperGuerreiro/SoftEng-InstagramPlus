window.onload = function() { 
    
    var fileURL = localStorage.getItem("tmp_file_url");
    var fileFormat = localStorage.getItem("tmp_file_format");
        
    //é foto
    if(fileFormat == "photo"){
        
        //faz elemento img dentro da div correcta
        document.getElementById("load-content").innerHTML = "<img src="+fileURL + " width=\"400px\" height=\"150px\">";
       
    }
    
    //se não é foto, é obrigatoriamente video (dado que já confirmamos antes)
    else{
        
        //document.getElementById("load-content").innerHTML = "<img src="+fileURL + " width=\"400px\" height=\"150px\">";
        console.log("é video");
        //Tratar video
        
        
    }
        
}