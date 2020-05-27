//in bytes
const IMAGE_SIZE_LIMIT = 2000000; //2mb
const VIDEO_SIZE_LIMIT = 8000000; //8mb

/*exported uploadFile */

function uploadFile() { 
    var file = document.getElementById("uploadFile");
    
    var fileName = file.files[0].name;
    
    var filesize = file.files[0].size;
    
    if(fileName.endsWith(".jpg") || fileName.endsWith(".png")){
        
        if(file.files[0].size >= IMAGE_SIZE_LIMIT){
            window.alert("Image Size Exceeded. Over 2mb");
            return; 
        }
            
        localStorage.setItem("tmp_file", file);
        console.log("Aqui");
        //Redirect para create_post
        window.location.replace("./Components/create_post/create_post.html"); 
    }
    
    else if(fileName.endsWith(".mp4")){
        
        if(file.files[0].size >= VIDEO_SIZE_LIMIT){
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