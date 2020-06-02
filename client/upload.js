//in bytes
const IMAGE_SIZE_LIMIT = 2000000; //2mb
const VIDEO_SIZE_LIMIT = 8000000; //8mb

/*exported uploadFile */
function uploadFile(){
    upload("./Components/create_post/create_post.html");
}

function uploadFileFF(){
    upload("../../Components/create_post/create_post.html");
}

function upload(path) { 
    var file = document.getElementById("uploadFile").files[0];
    var filePath = document.getElementById("uploadFile").value;
    
    console.log(file.name);

    if(file.name.endsWith(".jpg") || file.name.endsWith(".png")){
        
        if(file.size >= IMAGE_SIZE_LIMIT){
            window.alert("Image Size Exceeded. Over 2mb");
            return; 
        }
        
        localStorage.setItem("tmp_file_location", "test/content/" + file.name);
        localStorage.setItem("tmp_file_format", "photo");

        //Redirect para create_post
        window.location.replace(path); 
    }
    
    else if(file.name.endsWith(".mp4")){
        
        if(file.size >= VIDEO_SIZE_LIMIT){
            window.alert("Video Size Exceeded. Over 8mb");
            return;  
        }
        
        localStorage.setItem("tmp_file_location", "test/content/" + file.name);
        localStorage.setItem("tmp_file_format", "video");
        
        console.log("é video");
        //Tratar video
       
        //Redirect para create_post
        window.location.replace(path); 
    } else{
        window.alert("Please choose a photo or a video in a supported format.");
        return;
    }
        
}

function teste(){
    console.log("cliquei");
}
