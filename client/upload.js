//in bytes
const IMAGE_SIZE_LIMIT = 2000000; //2mb
const VIDEO_SIZE_LIMIT = 8000000; //8mb

/*exported uploadFile */

function uploadFile() { 
    var file = document.getElementById("uploadFile").files[0];


    if(file.name.endsWith(".jpg") || file.name.endsWith(".png")){
        
        if(file.size >= IMAGE_SIZE_LIMIT){
            window.alert("Image Size Exceeded. Over 2mb");
            return; 
        }
          
        var fileURL = URL.createObjectURL(file);

        localStorage.setItem("tmp_file_url", fileURL);
        localStorage.setItem("tmp_file_format", "photo");
        
        document.getElementById("demo").innerHTML = "<img src="+fileURL + " width=\"400px\" height=\"150px\">";
        
        console.log("Aqui");
        //Redirect para create_post
        window.location.replace("./Components/create_post/create_post.html"); 
    }
    
    else if(file.name.endsWith(".mp4")){
        
        if(file.size >= VIDEO_SIZE_LIMIT){
            window.alert("Video Size Exceeded. Over 8mb");
            return; 
        }
        
        console.log("é video");
        //Tratar video
       
        //Redirect para create_post
        window.location.replace("./Components/create_post/create_post.html"); 
    } else{
        window.alert("Please choose a photo or a video in a supported format.");
        return;
    }
        
}


