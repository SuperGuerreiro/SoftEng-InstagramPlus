window.onload = function() { 
    
    var fileLoc = localStorage.getItem("tmp_file_location");
    var fileFormat = localStorage.getItem("tmp_file_format");
    
    console.log(fileLoc);
    console.log(fileFormat);
        
    //é foto
    if(fileFormat == "photo"){
        
        //faz elemento img dentro da div correcta
        document.getElementById("load-content").innerHTML = "<img src=../../"+fileLoc + ">";
       
    }
    
    //se não é foto, é obrigatoriamente video (dado que já confirmamos antes)
    else{
        
        
        console.log("é video");
        
        //Tratar video
        document.getElementById("load-content").innerHTML = "<video autoplay loop muted><source src=../../"+fileLoc + " type='video/mp4'>Your browser does not support the video tag.</video>"
        
    }
        
}